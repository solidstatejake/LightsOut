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

  switchSquare(key) {
    this.setState(currentState => ({
      squareStates: currentState.squareStates.map((square, index) => {
        return index === key ? !square : square;
      })
    }));
  }

  render() {
    const squareIdArray = generateSquareIdArray();
    return (
      <div className='GameContainer'>
        { Array.from(Array(25).keys()).map((i) => {

          return <Square
            key={ i }
            squareId={ squareIdArray[i] }
            switchSquare={ this.switchSquare }
            isOn={ this.state.squareStates[ i ] }
          />
        }) }
      </div>
    );
  }
}

export default GameContainer;