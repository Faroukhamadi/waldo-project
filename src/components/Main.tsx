import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import waldoBeach from '../images/beach-waldo.jpg';
import Popup from './Popup';
import InputPopup from '../components/InputPopup';

type Props = {
  xCoordinate: string | number;
  yCoordinate: string | number;
  setXCoordinate: React.Dispatch<React.SetStateAction<number>>;
  setYCoordinate: React.Dispatch<React.SetStateAction<number>>;
};

type event = React.MouseEvent<HTMLImageElement, MouseEvent>;

const Main = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInputPopup = () => {
    setIsOpen(!isOpen);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [eventOffsetX, setEventOffsetX] = useState(0);
  const [eventOffsetY, setEventOffsetY] = useState(0);
  const [isFoundWaldo, setIsFoundWaldo] = useState(false);
  const [isFoundOdlaw, setIsFoundOdlaw] = useState(false);
  const [isFoundWhiteBeard, setIsFoundWhiteBeard] = useState(false);
  const handleClick = (e: event) => {
    let currentTargetRect: DOMRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX: number = e.pageX - currentTargetRect.left,
      event_offsetY: number = e.pageY - currentTargetRect.top;

    setEventOffsetX(event_offsetX);
    setEventOffsetY(event_offsetY);

    if (showPopup === true) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };
  return (
    <div className="main">
      {isOpen && <InputPopup toggleInputPopup={toggleInputPopup} />}
      <img src={waldoBeach} alt="waldo" onClick={handleClick} />
      {showPopup && (
        <Popup
          eventOffsetX={eventOffsetX}
          eventOffsetY={eventOffsetY}
          isFoundWaldo={isFoundWaldo}
          isFoundOdlaw={isFoundOdlaw}
          isFoundWhiteBeard={isFoundWhiteBeard}
          setIsFoundWhiteBeard={setIsFoundWhiteBeard}
          setIsFoundWaldo={setIsFoundWaldo}
          setIsFoundOdlaw={setIsFoundOdlaw}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleInputPopup={toggleInputPopup}
        />
      )}
    </div>
  );
};

export default Main;
