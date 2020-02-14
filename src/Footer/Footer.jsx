import React from 'react';
import '../App.css';
import Logo from "../Logo";
import FooterMenu from "./FooterMenu";

function Footer(props) {
  return (
      <footer>
      <div className="App-footer">
          <div className="App-logo">
              <Logo/>
          </div>

         <div className="Footer-content">
             <FooterMenu footerMenuItem={props.footerMenuItem} />

             <p>HELLO!!</p>

          </div>

      </div>
      </footer>
  );
}
export default Footer;
