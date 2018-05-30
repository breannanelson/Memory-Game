import React from 'react';
import './tiles.css';
import tiles from "./tiles.json";

const Tiles = props => (
    <main role="main" className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <p>Tiles go here</p>
            </div>
            <div className="col-md-1"></div>
        </div>
    </main>
);

export default Tiles;