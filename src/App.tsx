import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Popup from './components/Popup';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      setSeconds((prevSecond) => {
        if (seconds >= 59) {
          return 0;
        } else {
          return prevSecond + 1;
        }
      });
      setMinutes((prevMinute) => {
        if (seconds >= 59) {
          return prevMinute + 1;
        } else {
          return prevMinute;
        }
      });
    }, 1000);

    const minuteInterval = setInterval(() => {
      setMinutes((prevMinute) => {
        if (minutes >= 59) {
          return 0;
        } else {
          return prevMinute + 1;
        }
      });
    }, 60000);

    return () => {
      clearInterval(secondInterval);
      clearInterval(minuteInterval);
    };
  }, [minutes, seconds]);

  return (
    <div className="app">
      <Header
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <Main
        xCoordinate={xCoordinate}
        yCoordinate={yCoordinate}
        setXCoordinate={setXCoordinate}
        setYCoordinate={setYCoordinate}
      />
    </div>
  );
};

export default App;
