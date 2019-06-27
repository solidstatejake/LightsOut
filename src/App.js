import React from 'react';
import LightsOut from './LightsOut';
import './css/App.css';
import GameBoard from "./GameBoard";

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <GameBoard/>
      </main>
    </div>
  );
}

export default App;
