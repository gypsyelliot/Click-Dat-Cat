import React from 'react';
import Card from '../Card';

const Game = props => (
  <div className="container">
    <div className="row">

      {props.kittens.map(kitten => {
        return <Card 
        key={kitten.id} 
        id={kitten.id} 
        image={kitten.image}
        onClickHandler={props.onClickHandler}
         />;
      })};

    </div>
  </div>
);

export default Game;
