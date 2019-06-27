import React, { Component } from 'react';
import Square from './Square';
import GameOver from './GameOver';
import {
  generateSquareStateArray,
  generateSquareIdArray,
  flipSquare,
  flipSiblings,
} from "./helpers";
import './sass/components/LightsOut.scss';

class LightsOut extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      squareStates: generateSquareStateArray(true),
      gameOver: true
    };

    this.updateSquareStates = this.updateSquareStates.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  // Note that checkGameOver() is being thrown as callback function to second setState
  // to ensure that game ends on final click.
  updateSquareStates(squareCoordinates) {
    this.setState(currentState => ({
      squareStates: flipSquare(currentState, squareCoordinates)
    }));
    this.setState(currentState => ({
      squareStates: flipSiblings(currentState, squareCoordinates)
    }), () => this.checkGameOver());
  }

  checkGameOver() {
    if (this.state.gameOver === false && this.state.squareStates.flat().every((x => x === false))) {
      this.setState(currentState => ({ gameOver: true }));
    }

  }

  restartGame() {
    this.setState(currentState => ({
      squareStates : currentState.squareStates.map(row => {
        return row.map(elem => false);
      }),
      gameOver: false
    }))
  }

  render() {
    if (this.state.gameOver) {
      return (
        <GameOver restartGame={this.restartGame}/>
      );
    }
    else {
      const squareCoordinatesArray = generateSquareIdArray();
      return (
        <div className='LightsOut'>
          <header className="LightsOut__header">
            <h1 className="header">Lights Out</h1>
          </header>
          <div className="LightsOut__game-container">
            { generateSquareStateArray(0).map((row, rowIndex) => {
              return row.map((col, colIndex) => {
                return <Square
                  key={ rowIndex * 5 + colIndex }
                  squareCoordinates={ squareCoordinatesArray[ rowIndex * 5 + colIndex ] }
                  isOn={ this.state.squareStates[ rowIndex ][ colIndex ] }
                  updateSquareStates={ this.updateSquareStates }
                />
              })
            })
            }
          </div>
        </div>
      );
    }
  }
}

export default LightsOut;