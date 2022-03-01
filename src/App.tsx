import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import picture from './images/beach-waldo.jpg';

type Props = {};

const App = (props: Props) => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
