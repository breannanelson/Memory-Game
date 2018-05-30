import React from 'react';
import './navbar.css';

const Navbar = props => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="mr-auto"><a className="navbar-brand" href="/">Memory Game</a></div>
            <div className="form-inline my-2 my-lg-0">
                <h3 className="text-right">Score: num | Top Score: num</h3>
            </div>
        </nav>
    </header>
);

export default Navbar;