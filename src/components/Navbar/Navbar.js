import React from 'react';
import './Navbar.css';

 const Navbar = (props) => (

     <nav className='navbar-fluid'>
      <ul className='navUl'>
        <li>Click Dat Cat!</li>
        <li>{props.message}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
     </nav>
)

export default Navbar;