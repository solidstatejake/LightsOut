import React, { Component } from 'react';
import './sass/main.scss';

class Square extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOn: this.props.isOn,
  //   };
  // }

  handleSwitchSquare() {
    this.props.switchSquare(this.props.key);
  }

  render() {
    return (
      <div onClick={this.props.switchSquare}
           className={`Square ${this.props.isOn ? 'Square--is-on' : 'Square--is-off'}`}
          >

      </div>
    );
  }
}

export default Square;