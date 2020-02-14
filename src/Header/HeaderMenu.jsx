import React from 'react';
import '../App.css';
import HeaderMenuItem from "./HeaderMenuItem";

function HeaderMenu(props) {

    return (
        <nav className="Header-menu">
            <ul>
                {props.headerMenuItem.map(el => <HeaderMenuItem key={el.text} headerMenuItem={el}/>)}
                </ul>

        </nav>
    );
}

export default HeaderMenu;
