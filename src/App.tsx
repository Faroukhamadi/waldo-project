import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import picture from './images/beach-waldo.jpg';

const App = () => {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);

  return (
    <div className="app">
      <Header />
      <Main xCoordinate={yCoordinate} yCoordinate={yCoordinate} />
    </div>
  );
};

export default App;
