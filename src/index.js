import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// const letters = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let count = 0;
class Hangman extends React.Component {
    constructor() {
        super();
        this.state = {
            imgPath: require('./Images/hangman0.png'),
            secretWord: "secret",
            guessWord: "------",
            currentGuess: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.guessWord);
    }

    updateGuessWord = (event) => {
        this.setState({guessWord: event.target.value})
    }

    handleWrongAnswer = (event) => {
        count++;
        this.setState({imgPath: require(`./Images/hangman${count}.png`)});
    }
    
    render() {
        return (
            <div className='mainChunk'>
              <h1>Hangman</h1>
              <img src={this.state.imgPath} alt='Hangman image' />
              <h2>{this.state.guessWord}</h2>
              <button onClick={this.handleWrongAnswer}>Wrong Guess</button>
              {/* <form onSubmit={this.submitHandler}>
                 <input type='text' onChange={this.updateGuessWord}/>
                 <input type='submit' value='Make Guess'/>
              </form> */}
            </div>
        )
    }
}


ReactDOM.render(<Hangman />, document.getElementById('root'));

serviceWorker.unregister();
