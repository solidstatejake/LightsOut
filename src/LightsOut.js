import React, { Component } from 'react'
import GameBoard            from './GameBoard'
import GameOver             from './GameOver'


class LightsOut extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gameOver: false
    }

    this.updateGameOver = this.updateGameOver.bind(this)
    this.restartGame    = this.restartGame.bind(this)
  }

  updateGameOver () {
    this.setState({ gameOver: true })
  }

  restartGame () {
    this.setState({ gameOver: false })
  }


  render () {
    if (!this.state.gameOver) {
      return (
        <GameBoard gameOver={ this.state.gameOver }
                   updateGameOver={ this.updateGameOver }

        />
      )
    }
    else {
      return (
        <GameOver restartGame={ this.restartGame }/>
      )
    }
  }
}

export default LightsOut
