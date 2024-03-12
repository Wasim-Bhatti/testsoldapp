import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="columns">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;