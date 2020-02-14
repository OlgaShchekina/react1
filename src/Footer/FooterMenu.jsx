import React from 'react';
import '../App.css';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu(props) {

    return (
        <nav className="Footer-menu">
            <ul>
                {props.footerMenuItem.map(el => <FooterMenuItem key={el.text} footerMenuItem={el}/>)}
                </ul>

        </nav>
    );
}

export default FooterMenu;
