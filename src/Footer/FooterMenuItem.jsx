import React from 'react';
import '../App.css';


function FooterMenuItem(props) {

    console.log(props);

  return (
      <li className="Footer-menu-item">
         <a href={props.footerMenuItem.link}>{props.footerMenuItem.text}</a>
      </li>

  );

}

export default FooterMenuItem;
