import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Footer from './components/Footer';
import Header from './components/Header';
import Kittens from './tiles.json';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click some kittens to begin!",
    clickedItems: [],
  };
  
  onClickHandler = (id) => () => {
    // get array 
    const savedItems = this.state.clickedItems;
    // test if item has been clicked
    if (savedItems.includes(id)) {
      this.setState({
        message: 'You guessed incorrectly!',
        score: 0,
        clickedItems: []
      });
    } else {
      // Set score
      let score = this.state.score + 1;
      // Set top score
      let topScore = this.state.topScore
      if (score > topScore) {
       topScore = score;
      }
      // add id
      savedItems.push(id);
      // set state of clickedItems
      this.setState({
        score: score,
        topScore: topScore,
        message: "You guessed correctly!",
        clickedItems: savedItems
      });
    }
  }
  
  // Shuffle array
  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  }
  
  // Used like so
  // var arr = [2, 11, 37, 42];
  // arr = shuffle(arr);
  // console.log(arr);
  // Set message

  render() {
    return (
      <div>
      <Navbar
         score={this.state.score} 
         topScore={this.state.topScore}
         message={this.state.message}
      />
      <Header />
      <Game 
        kittens={this.shuffle(Kittens)} 
        onClickHandler={this.onClickHandler} 
        />
      <Footer />
     </div>
    );
  }
}

export default App;
