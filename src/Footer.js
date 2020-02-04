import React from 'react';
import './App.css';
import Logo from "./Logo";

function Footer() {
  return (
      <div className="App-footer">
          <div className="App-logo">
              <Logo/>
          </div>

         <div className="Footer-content">
              Footer
          </div>

      </div>
  );
}
export default Footer;
