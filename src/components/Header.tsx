import React from 'react';
import waldo from '../images/waldo.png';
import odlaw from '../images/odlaw.png';
import whitebeard from '../images/whitebeard.png';

type Props = {
  minutes: number;
  seconds: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
};

const Header = (props: Props) => {
  return (
    <div className="header">
      <button className="header-btn">
        MAIN
        <br /> MENU
      </button>
      <div className="header-pics">
        <div className="header-pic-container">
          <img src={waldo} alt="waldo-pic" />
          <p>Waldo</p>
        </div>
        <div className="header-pic-container">
          <img src={odlaw} alt="odlaw-pic" />
          <p>Odlaw</p>
        </div>
        <div className="header-pic-container">
          <img src={whitebeard} alt="whitebeard-pic" />
          <p>WhiteBeard</p>
        </div>
      </div>
      <p className="header-timer">
        {props.minutes}m:{props.seconds}s
      </p>
    </div>
  );
};

export default Header;
