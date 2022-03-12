import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Popup from './components/Popup';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const waldoCollectionRef = collection(db, 'waldo');
  const odlawCollectionRef = collection(db, 'odlaw');
  const whiteBeardCollectionRef = collection(db, 'whitebeard');

  useEffect(() => {
    const getWaldoData = async () => {
      const waldoData = await getDocs(waldoCollectionRef);
      waldoData.docs.forEach((doc) => {
        console.log('waldo data: ', doc.data());
      });
    };

    const getOdlawData = async () => {
      const odlawData = await getDocs(odlawCollectionRef);
      odlawData.docs.forEach((doc) => {
        console.log('odlaw data: ', doc.data());
      });
    };

    const getWhiteBeardData = async () => {
      const whiteBeardData = await getDocs(whiteBeardCollectionRef);
      whiteBeardData.docs.forEach((doc) => {
        console.log('whitebeard data: ', doc.data());
      });
    };

    getWaldoData();
    getOdlawData();
    getWhiteBeardData();
  }, []);

  return (
    <div className="app">
      <Header />
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
