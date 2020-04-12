import React from 'react';
import './Layout.scss';
import Aux from '../Auxillary/Auxillarly';
import Header from '../../components/Navigation/Header/Header';


let Layout=(props)=>(
                    <div className="layout-body">
                    <Header/>
                    {props.children}
                    </div>
                    );

export default Layout;