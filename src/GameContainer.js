import React, { Component } from 'react';
import Square from './Square';
import { generateSquareStateArray, generateSquareIdArray } from "./helpers";
import './sass/components/GameContainer.scss';

class GameContainer extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      squareStates: generateSquareStateArray(false)
    };

    this.switchSquare = this.switchSquare.bind(this);
  }

  switchSquare(squareCoordinates) {
    const rowIndex = 0, columnIndex = 1;
    this.setState(currentState => {
      return ({
        squareStates: currentState.squareStates.map((squareStatesRow, squareStatesRowIndex) => {
          return squareStatesRowIndex !== squareCoordinates[ rowIndex ]
            ? squareStatesRow
            : squareStatesRow.map((squareStatesColumn, squareStatesColumnIndex) => {
              return squareStatesColumnIndex !== squareCoordinates[ columnIndex ]
                ? squareStatesColumn
                : !squareStatesColumn
            })
        }),
      });
    })
  }


  // !currentState.squareStates[ id[ 0 ] ][ id[ 1 ] ],
  // squareStates: currentState.squareStates.map((square, index) => {
  //   console.log(square);
  //   // [f,f,f,f,f]
  //   return ((id[0] === square && id[1] === index) ? !square[index] :
  // square[index]) // return index === id ? !square : square; })


// flipSiblings(id){
//
//
//  }
//

  render() {
    const squareCoordinatesArray = generateSquareIdArray();
    return (
      <div className='GameContainer'>
        { Array.from(Array(25).keys()).map((i) => {

          return <Square
            key={ i }
            squareCoordinates={ squareCoordinatesArray[ i ] }
            switchSquare={ this.switchSquare }
            isOn={ this.state.squareStates[ i ] }
          />
        }) }
      </div>
    );
  }
}

export default GameContainer;