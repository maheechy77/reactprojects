import React from 'react';
import burgerLogo from '../../assets/images/burgerlogo.png';
import './Logo.css';

const logo = (props) =>(
    <div className="Logo">
        <img src={burgerLogo} alt="Burger" />
    </div>
);
export default logo;