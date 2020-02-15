import React from 'react';
import '../App.css';
import Logo from "../Logo";
import FooterMenu from "./FooterMenu";

function Footer(props) {
  return (
      <footer>
      <div className="container">
          <div className="App-logo">
              <Logo/>
          </div>

         <div className="Footer-content">
             <FooterMenu headerMenuItem={props.headerMenuItem} footerMenuItem1={props.footerMenuItem1} footerText={props.footerText}/>

          </div>

      </div>
      </footer>
  );
}
export default Footer;
