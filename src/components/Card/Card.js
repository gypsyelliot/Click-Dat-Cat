import React from 'react';
import './Card.css';

const Card = props => (
  <div className="col-md-3">
    <div className="card myCard" data-value={props.id} onClick={props.onClickHandler(props.id)}>
      <img
        className="card-img-top"
        src={props.image}
        id={props.id}
        alt="Card"
      />
    </div>
  </div>
);

export default Card;
