// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {imgUrl, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="coin" src={imgUrl} alt="toss result" />
          <button onClick={this.onClickBtn} type="button">
            Toss Coin
          </button>
          <div className="results">
            <p>Total: {total}</p>
            <p>heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
