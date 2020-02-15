import React from 'react';
import '../App.css';
import FooterMenuItem from "./FooterMenuItem";
import HeaderMenuItem from "../Header/HeaderMenuItem";

function FooterMenu(props) {

    return (
        <nav className="Footer-menu">
            <ul>
                {props.headerMenuItem.map(el => <HeaderMenuItem key={el.text} headerMenuItem={el}/>)}
                {props.footerMenuItem1.map(el => <FooterMenuItem key={el.text} footerMenuItem1={el}/>)}

            </ul>

            <ul>
                {props.footerText}
            </ul>


        </nav>

    );
}


export default FooterMenu;
