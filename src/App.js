import React from 'react';
import GameBoard from './GameBoard';
import './css/App.css';
import LightsOut from "./LightsOut";

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <LightsOut/>
      </main>
    </div>
  );
}

export default App;
