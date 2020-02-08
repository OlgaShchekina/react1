import React from 'react';
import './App.css';
import Logo from "./Logo";

function Footer() {
  return (
      <footer className="App-footer">
          <div className="App-logo">
              <Logo/>
          </div>

         <div className="Footer-content">
              Footer
          </div>

      </footer>
  );
}
export default Footer;
