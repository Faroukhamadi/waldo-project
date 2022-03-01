import React from 'react';
import waldoBeach from '../images/beach-waldo.jpg';

type Props = {
  xCoordinate: string | number;
  yCoordinate: string | number;
  setXCoordinate: React.Dispatch<React.SetStateAction<number>>;
  setYCoordinate: React.Dispatch<React.SetStateAction<number>>;
};

type event = React.MouseEvent<HTMLImageElement, MouseEvent>;

const Main = (props: Props) => {
  const handleCoordinates = (e: event) => {
    let currentTargetRect: DOMRect = e.currentTarget.getBoundingClientRect();
    const event_offsetX: number = e.pageX - currentTargetRect.left,
      event_offsetY: number = e.pageY - currentTargetRect.top;
    console.log(event_offsetX);
    console.log(event_offsetY);
  };

  return (
    <div className="main">
      <img src={waldoBeach} alt="waldo" onClick={handleCoordinates} />
    </div>
  );
};

export default Main;
