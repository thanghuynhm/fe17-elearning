import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Button } from 'reactstrap';
function App() {
  const myname = "ThangHuynh";
  return (
    <div className="App">
      <Header/>
      <h1>Elearning</h1>
    </div>
  );
}

export default App;
