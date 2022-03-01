import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const waldoCollectionRef = collection(db, 'waldo');

  useEffect(() => {
    const getWaldoData = async () => {
      const waldoData = await getDocs(waldoCollectionRef);
      waldoData.docs.forEach((doc) => {
        console.log(doc.data());
      });
    };

    getWaldoData();
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
