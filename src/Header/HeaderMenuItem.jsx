import React from 'react';
import '../App.css';


function HeaderMenuItem(props) {

    console.log(props);

  return (
      <li className="Header-menu-item">
         <a href={props.headerMenuItem.link}>{props.headerMenuItem.text}</a>
      </li>

  );

}

export default HeaderMenuItem;
