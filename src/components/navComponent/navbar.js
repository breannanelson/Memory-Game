import React from 'react';
import './navbar.css';

const Navbar = props => (
    <header>
        <nav id="full-nav" className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="mr-auto"><h3 className="nav-text" >Memory Game</h3></div>
            <div className="form-inline my-2 my-lg-0">
                <h3 className="text-right nav-text">Score: {props.score} | Top Score: {props.highScore}</h3>
            </div>
        </nav>
    </header>
);

export default Navbar;