import React from 'react';
import './Logo.scss';

let Logo=(props)=>(
    <div className="logo-space">
        <img src={require('./Heet.png')} alt={"My Logo"} className="logo-space__img"/>
    </div>
);

export default Logo;    