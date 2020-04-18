import React from 'react';
import './Logo.scss';

let Logo=(props)=>(
    <div className="logo-space">
        <a href="/"><img src={require('./Heet.png')} alt={"My Logo"} className="logo-space__img"/></a>
    </div>
);

export default Logo;    