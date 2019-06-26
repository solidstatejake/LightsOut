import React, { Component } from 'react';
import './sass/main.scss';

class Square extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  render() {
    return (
      <div className="Square">

      </div>
    );
  }
}

export default Square;