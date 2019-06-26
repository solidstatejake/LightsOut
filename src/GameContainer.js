import React, { Component } from 'react';
import Square from './Square';
import {
  generateSquareStateArray,
  generateSquareIdArray,
  updateSquareStates
} from "./helpers";
import './sass/components/GameContainer.scss';

class GameContainer extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      squareStates: generateSquareStateArray(false)
    };

    this.switchSquare = this.switchSquare.bind(this);
    this.switchSiblings = this.switchSiblings.bind(this);
  }

  switchSquare(squareCoordinates) {
    this.setState(currentState => ({
      squareStates: updateSquareStates(currentState, squareCoordinates)
    }));
    this.switchSiblings(squareCoordinates);
  }

  switchSiblings(squareCoordinates) {
    const rowIndex = 0, columnIndex = 1;
    this.setState(currentState => ({
        squareStates: currentState.squareStates.map((squareStatesRow, squareStatesRowIndex) => {

          if (squareStatesRowIndex === squareCoordinates[ rowIndex ]) {

            if (squareStatesRow[ squareCoordinates[ columnIndex ] + 1 ] !== undefined ) {
              squareStatesRow[ squareCoordinates[ columnIndex ] + 1 ] = !squareStatesRow[ squareCoordinates[ columnIndex ] + 1 ];
            }
            if (squareStatesRow[ squareCoordinates[ columnIndex ] - 1 ] !== undefined) {
              squareStatesRow[ squareCoordinates[ columnIndex ] - 1 ] = !squareStatesRow[ squareCoordinates[ columnIndex ] - 1 ];
            }
            if (currentState.squareStates[ squareCoordinates[ rowIndex ] + 1 ] !== undefined) {
              currentState.squareStates[ squareCoordinates[ rowIndex ] + 1 ][ squareCoordinates[ columnIndex ] ] = !currentState.squareStates[ squareCoordinates[ rowIndex ] + 1 ][ squareCoordinates[ columnIndex ] ];
            }
            if (currentState.squareStates[ squareCoordinates[ rowIndex ] - 1 ] !== undefined) {
              currentState.squareStates[ squareCoordinates[ rowIndex ] - 1 ][ squareCoordinates[ columnIndex ] ] = !currentState.squareStates[ squareCoordinates[ rowIndex ] - 1 ][ squareCoordinates[ columnIndex ] ];
            }

          }
          console.log(squareStatesRow);
          return squareStatesRow;
        })
      })
    );
      console.log(this.state.squareStates);
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
              switchSquare={ this.switchSquare }
              isOn={ this.state.squareStates[ rowIndex ][ colIndex ] }
            />
          })

        }) }
      </div>
    );
  }
}

export default GameContainer;