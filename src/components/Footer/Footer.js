import React, { Component } from 'react';
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
     <footer>
      <div className = 'footer'>
      {String.fromCharCode( "169" )} Elliot Reed 2018 
      {/* <img alt = 'React logo' src ={window.location.origin + "/public/images/logo.svg"} /> */}
      </div>
     </footer>
    );
  }
}

export default Footer;