import React, { Component } from 'react';
import Square from './Square';
import './sass/components/GameContainer.scss';

class GameContainer extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      squareStates: [ false, false, false, false,
                      false, false, false, false,
                      false, false, false, false,
                      false, false, false, false ]
    };

    // this.switchSquare = this.switchSquare.bind(this);
  }

  switchSquare(key) {
    this.setState(st => ({
      squareStates: st.squareStates.map((square, index) => {
        return index === key ? !square : square;
      })

    }));
  }

  render() {
    return (
      <div className='GameContainer'>
        { Array.from(Array(16).keys()).map((i) => {
          return <Square
            key={ i }
            switchSquare={ () => this.switchSquare(i) }
            isOn={this.state.squareStates[i]}
          />
        }) }
      </div>
    );
  }
}

export default GameContainer;