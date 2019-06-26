import React, { Component } from 'react';
import Square from './Square';
import {
  generateSquareStateArray,
  generateSquareIdArray,
  flipSquare,
  flipSiblings,
} from "./helpers";
import './sass/components/GameContainer.scss';

class GameContainer extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      squareStates: generateSquareStateArray(true),
      gameOver: false
    };

    this.updateSquareStates = this.updateSquareStates.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
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
    if (this.state.gameOver === false && this.state.squareStates.flat().every((x => x === false)) ) {
      this.setState(currentState => ({ gameOver: true }));
    }

  }

  render() {
    const squareCoordinatesArray = generateSquareIdArray();
    return (
      <div className='GameContainer'>
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
    );
  }
}

export default GameContainer;