import React, { Component } from 'react';
import Square from './Square';
import {
  generateSquareStateArray,
  generateSquareCoordinatesArray,
  flipSquare,
  flipSiblings,
} from "./helpers";
import './sass/components/LightsOut.scss';

class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squareStates: generateSquareStateArray(false),
      newGame: true,
      gameStack: [], //needs to be array of array to hold coordinates
      gameOver: this.props.gameOver
    };

    this.generateGameBoard = this.generateGameBoard.bind(this);
    this.updateSquareStates = this.updateSquareStates.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.handleUpdateGameOver = this.handleUpdateGameOver.bind(this);

  }

  generateGameBoard(numberOfMoves) {
    let moves = Array(0);
    for (let i = 0; i < numberOfMoves; i++) {
      let x = Math.floor(Math.random() * 5);
      let y = Math.floor(Math.random() * 5);
      moves.push([ x, y ]);
    }
    this.setState({ gameStack: moves }, moves.forEach(move => {
      this.updateSquareStates(move);
    }));

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
      // this.setState(currentState => ({ gameOver: true }));
      this.handleUpdateGameOver();
    }

  }

  handleUpdateGameOver() {
    this.props.updateGameOver();
  }

  restartGame() {
    this.setState(currentState => ({
      squareStates: currentState.squareStates.map(row => {
        return row.map(elem => false);
      }),
      gameOver: false
    }))
  }

  render() {
    if (this.state.newGame) {
      this.generateGameBoard(20);
      this.setState({ newGame: false });
    }
    const squareCoordinatesArray = generateSquareCoordinatesArray();
    return (

      <div className='LightsOut'>
        <header className="LightsOut__header">
          <h1 className="header">Lights Out</h1>
        </header>
        <div className="LightsOut__game-container">
          {
            generateSquareStateArray(0).map((row, rowIndex) => {
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

export default GameBoard;