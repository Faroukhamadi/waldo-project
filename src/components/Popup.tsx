import React, { useEffect, useState } from 'react';

import { db } from '../firebase-config';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

type Props = {
  eventOffsetX: number;
  eventOffsetY: number;
  isFoundWaldo: boolean;
  isFoundOdlaw: boolean;
  isFoundWhiteBeard: boolean;
  setIsFoundWhiteBeard: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFoundWaldo: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFoundOdlaw: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleInputPopup: () => void;
};

const Popup = (props: Props) => {
  const [isFound, setIsFound] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    let id = '';
    if (e.currentTarget.textContent === 'odlaw') {
      id = 'XYmDTSDIxeY14ZTLZ8er';
    } else if (e.currentTarget.textContent === 'waldo') {
      id = 'ytHrILQDSKdfHk4ukiFh';
    } else {
      id = 'oinPy4X5vI8SAWSsDOFz';
    }
    if (e.currentTarget.textContent === null) {
      console.log('sorry cant handle request');
    } else if (
      e.currentTarget.textContent !== null &&
      e.currentTarget.textContent !== undefined
    ) {
      const collectionRef = collection(db, e.currentTarget.textContent);
      let text = e.currentTarget.textContent;
      const getData = async () => {
        const data = await getDocs(collectionRef);
        console.log('this is the data I need');
        data.docs.forEach((doc) => {
          const databaseX = doc.data().x;
          const databaseY = doc.data().y;
          const databaseIsFound = doc.data().isFound;

          if (
            props.eventOffsetX >= databaseX[0] &&
            props.eventOffsetX <= databaseX[1] &&
            props.eventOffsetY >= databaseY[0] &&
            props.eventOffsetY <= databaseY[1]
          ) {
            if (text === 'waldo') {
              props.setIsFoundWaldo(true);
            } else if (text === 'odlaw') {
              props.setIsFoundOdlaw(true);
            } else if (text === 'whitebeard') {
              props.setIsFoundWhiteBeard(true);
            }
          }
        });
      };
      getData();
    }
  };

  useEffect(() => {
    console.log('Use Effect is happening wohooooooooooooooo');
    const odlawDoc = doc(db, 'odlaw', 'XYmDTSDIxeY14ZTLZ8er');
    const waldoDoc = doc(db, 'waldo', 'ytHrILQDSKdfHk4ukiFh');
    const whiteBeardDoc = doc(db, 'whitebeard', 'oinPy4X5vI8SAWSsDOFz');
    updateDoc(odlawDoc, { isFound: props.isFoundOdlaw });
    updateDoc(waldoDoc, { isFound: props.isFoundWaldo });
    updateDoc(whiteBeardDoc, { isFound: props.isFoundWhiteBeard });
    if (
      props.isFoundOdlaw !== false ||
      props.isFoundWaldo !== false ||
      props.isFoundWhiteBeard !== false
    ) {
      setIsFound(true);
      setTimeout(() => setIsFound(false), 500);
    }
    if (props.isFoundOdlaw && props.isFoundWaldo && props.isFoundWhiteBeard) {
      updateDoc(odlawDoc, { isFound: false });
      updateDoc(waldoDoc, { isFound: false });
      updateDoc(whiteBeardDoc, { isFound: false });
      // TODO: write code here
      props.toggleInputPopup();
    }
  }, [props.isFoundOdlaw, props.isFoundWaldo, props.isFoundWhiteBeard]);

  return (
    <ul
      className="popup"
      style={{
        top: props.eventOffsetY + 95,
        left: props.eventOffsetX + 45,
      }}
    >
      {isFound && <li>You Found One!</li>}
      <li className="popup-waldo" onClick={handleClick}>
        waldo
      </li>
      <li className="popup-odlaw" onClick={handleClick}>
        odlaw
      </li>
      <li className="popup-whitebeard" onClick={handleClick}>
        whitebeard
      </li>
    </ul>
  );
};

export default Popup;
