import React, { Component } from 'react';

class GameOver extends Component {

  constructor(props) {
    super(props);

    this.handleRestartGame = this.handleRestartGame.bind(this);
  }

  handleRestartGame() {
    this.props.restartGame();
  }

  render() {
    return (
      <div className="GameOver">

        <header className="GameOver__header">
          <h1>You turned the lights out!</h1>
        </header>

        <main className="GameOver__main">
          <nav className="nav">
            <button className="nav__button"
                    onClick={ this.handleRestartGame }>Restart Game
            </button>
          </nav>
        </main>

      </div>
    );
  }
}

export default GameOver;