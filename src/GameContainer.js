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
      squareStates: generateSquareStateArray(false)
    };

    this.updateSquareStates = this.updateSquareStates.bind(this);
  }

  updateSquareStates(squareCoordinates) {
    this.setState(currentState => ({
      squareStates: flipSquare(currentState, squareCoordinates)
    }));
    this.setState(currentState => ({
      squareStates: flipSiblings(currentState, squareCoordinates)
    }));
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
              updateSquareStates={ this.updateSquareStates }
              isOn={ this.state.squareStates[ rowIndex ][ colIndex ] }
            />
          })

        }) }
      </div>
    );
  }
}

export default GameContainer;