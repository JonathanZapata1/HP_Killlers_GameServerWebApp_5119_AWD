import React from 'react';
import './header.css';
import Carrsel from './carrusel';
import Information from './information.js';
import Discord from './discord.js'

const body = () => {
    return (
        <div className="main-body">
            <Carrsel/>
            <Information/> 
            <Discord/>
        </div>
    );
};

export default body;