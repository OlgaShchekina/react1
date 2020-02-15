import React from 'react';
import '../App.css';
import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";


function Header(props) {
  return (
      <header>
      <div className="container">
          <Logo/>
          <HeaderMenu headerMenuItem ={props.headerMenuItem} />
     </div>
      </header>

  );
}

export default Header;
