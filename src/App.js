import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <div className="columns">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
      <Footer />
    </div>
  );
}

export default App;