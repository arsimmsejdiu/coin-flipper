import React, { Component } from "react";

import "./Button.css";
import { choice } from "./helpers.js";
import Coin from "./Coin.component";
import "./Coin.css";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
      },
      {
        side: "tails",
        imgSrc: "https://tinyurl.com/react-coin-tails-jpg",
      },
    ],
  };

  state = {
    currCoin: null,
    numFlips: 0,
    numHeads: 0,
    numTails: 0,
  };

  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
        numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  };

  handleClick = (e) => {
    this.flipCoin();
  };

  handleReset = () => {
    this.setState({
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
    });
  };

  render() {
    const { numFlips, numHeads, numTails } = this.state;
    return (
      <div className="CoinContainer">
        <h1 className="title">Let's flip a coin</h1>
        {(this.state.currCoin && <Coin info={this.state.currCoin} />) || (
          <h2 className="heads-tails">Heads or Tails</h2>
        )}

        <button onClick={this.handleClick} className="Button">
          Flip the Coin!!
        </button>
        <button onClick={this.handleReset} className="Button">
          Reset 'Flip the Coin!!'
        </button>
        <p>
          Out of {<div className="num-flips">{numFlips}</div>} <b>flips</b>, there have
          been {<div className="num-flips">{numHeads}</div>} <b>heads</b> and {<div className="num-flips">{numTails}</div>} <b>tails</b>.
        </p>
      </div>
    );
  }
}

export default CoinContainer;

//https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg

//http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=f948f3fa7b0f7ff9c6b7956e0cb271584ec0dcfb-1592990538-0-AeIvR7jAT7JplZY3nQht28C_rFZKmovSO7VUIMNNU3wGZio00tnBegRdsgLePCEvcSMoNcFqdNhTLLMf-W_4zAKb4pscRddh25Fxg3LHO0MMlYFpDJ38HmoVP4kpfOai9Heh6bm0fvaiscNUU5_46SHmG8pJcmCVabDiJDAiWBcEonHJ2cTE3WPqgzEoq-8rd2sdDVv6ZkK-PUCpr8QpfTnTcy4adVt5NzmPM2oSqxofbbgNBGzUekCvc8wZ61kDK2Olj4iHqiQ7K-odg6BfMzqGNK7uPlKAQDs-OMdVN5vUzj0S8Oum-Wz-6QlhQY-aJQ
