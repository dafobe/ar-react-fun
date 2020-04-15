import React from 'react';
import './header.scss';

function Header(props) {
    const { menu, submenu } = props;

    return (
        <header>
            Header2
            {menu && <div>menu</div>}
            {submenu && <div>submenu</div>}
        </header>
    );
}

export default Header;
