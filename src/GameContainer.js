import React, { Component } from 'react';
import Square from './Square';
import './sass/components/GameContainer.scss';

class GameContainer extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='GameContainer'>
        {Array.from(Array(16).keys()).map( () => {
         return <Square />
        })}
      </div>
    );
  }
}

export default GameContainer;