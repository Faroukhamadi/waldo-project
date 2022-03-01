import React from 'react';
import waldoBeach from '../images/beach-waldo.jpg';

type Props = {
  xCoordinate: string | number;
  yCoordinate: string | number;
};

const Main = (props: Props) => {
  console.log(props.xCoordinate);

  return (
    <div className="main">
      <img src={waldoBeach} alt="" />
    </div>
  );
};

export default Main;
