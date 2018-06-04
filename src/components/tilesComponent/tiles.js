import React from 'react';
import './tiles.css';

// class Tiles extends React.Component {

// you can do a did mount

//render()
//return

const Tiles = props =>
    <div className="img-container">
        <img className='tile-img'
             id={props.id} 
            name={props.name} 
            alt={props.name} 
            src={props.image} 
            onClick={props.onClick}
        />
    </div>


export default Tiles;