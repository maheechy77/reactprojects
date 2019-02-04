import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Main from '../../../hoc/Main';

const sideDrawer =(props) => {
    let attachClasses="SideDrawer Close";
    if(props.open){
        attachClasses="SideDrawer Open";
    }
    return(
        <Main>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses}>
                <div className="sidedrawerLogo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Main>
    );
};

export default sideDrawer;