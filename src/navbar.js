import './Navbar.css'
import React from 'react';
import tarte from './assets/svg/tarte.svg'
import logoname from './assets/svg/logo-philippe-lugnac.svg'

function navbar () {
    return (
        <div className="navbar">
            <img src={tarte} alt="tarte" className='imgTarte'/>
            <img src={logoname} alt="tarte" className=''/>
            <img src={tarte} alt="tarte" className='imgTarte'/>
            <div className="navtext">
                <text className='text'>Le chef</text>
                <text className='text'>Nos pâtisseries</text>
                <text className='text'>Où nous trouver</text>
                <text className='text'>Nous contacter</text>
            </div>
        </div>
    );
}

export default navbar;