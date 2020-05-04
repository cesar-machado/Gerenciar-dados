import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './header.css'


const Header = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="topo">
            <i className="menuToggle" onClick={(toggle) => {console.log("Você clicou")}} >
                <FontAwesomeIcon icon={faBars} />
            </i>
            <h1>Gerenciador de Dados</h1>
        </header>
    );
}

export default Header;