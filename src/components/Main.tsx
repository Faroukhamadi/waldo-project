import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import waldoBeach from '../images/beach-waldo.jpg';
import Popup from './Popup';

type Props = {
  xCoordinate: string | number;
  yCoordinate: string | number;
  setXCoordinate: React.Dispatch<React.SetStateAction<number>>;
  setYCoordinate: React.Dispatch<React.SetStateAction<number>>;
};

type event = React.MouseEvent<HTMLImageElement, MouseEvent>;

const Main = (props: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [eventOffsetX, setEventOffsetX] = useState(0);
  const [eventOffsetY, setEventOffsetY] = useState(0);
  const handleClick = (e: event) => {
    let currentTargetRect: DOMRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX: number = e.pageX - currentTargetRect.left,
      event_offsetY: number = e.pageY - currentTargetRect.top;

    setEventOffsetX(event_offsetX);
    setEventOffsetY(event_offsetY);

    console.log(event_offsetX);
    console.log(event_offsetY);
    if (showPopup === true) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  console.log(showPopup);

  return (
    <div className="main">
      <img src={waldoBeach} alt="waldo" onClick={handleClick} />
      {showPopup && (
        <Popup eventOffsetX={eventOffsetX} eventOffsetY={eventOffsetY} />
      )}
    </div>
  );
};

export default Main;
