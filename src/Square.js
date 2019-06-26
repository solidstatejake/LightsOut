import React, { Component } from 'react';
import './sass/main.scss';

class Square extends Component {

  constructor(props) {
    super(props);
    this.handleSwitchSquare = this.handleSwitchSquare.bind(this);
  }

  handleSwitchSquare() {
    this.props.switchSquare(this.props.squareId);
  }

  render() {
    return (
      <div onClick={ this.handleSwitchSquare }
           className={ `Square ${this.props.isOn ? 'Square--is-on' : 'Square--is-off'}` }
      >

      </div>
    );
  }
}

export default Square;