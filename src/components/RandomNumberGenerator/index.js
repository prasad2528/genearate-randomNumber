// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerate = () => {
    const {randomNumber} = this.state
    console.log(randomNumber)
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="res">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
