import React from 'react';
import './navbar.css';

const Navbar = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="mr-auto"><a class="navbar-brand" href="/">Memory Game</a></div>
        <div class="form-inline my-2 my-lg-0">
            <h3 className="text-right">Score: num | Top Score: num</h3>
        </div>
    </nav>
);

export default Navbar;