import React from 'react';
import './jumbotron.css';
import friendLogo from './friendslogo2.jpg'

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid" id="jumbo">
        <div className="container">
            <img id="logo" className="center" src={friendLogo} alt="Friends Logo"/>
        </div>
    </div>
);

export default Jumbotron;