import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import FontSizer from './components/FontSizer';
import AlignMe from './components/AlignMe';
import Clock from './components/Clock';
import ChangeColor from './components/ChangeColor';

function App() {
  


  return (
    <>

    <Counter /> 
    <hr/>
    <Toggle/>
    <hr/>
    <FontSizer />
    <hr/>
    <AlignMe />
    <hr/>
    <Clock />
    <hr/>
    <ChangeColor />

    </>
  );
}

export default App;
