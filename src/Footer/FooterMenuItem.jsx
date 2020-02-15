import React from 'react';
import '../App.css';


function FooterMenuItem(props) {

    console.log(props);

  return (
      <li className="Footer-menu-item">
         <a href={props.footerMenuItem1.link}>{props.footerMenuItem1.text}</a>
      </li>

  );

}

export default FooterMenuItem;
