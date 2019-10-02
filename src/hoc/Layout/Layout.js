import React,{Component} from 'react';
import Aux from '../Auxillary/Auxillarly';
import Header from '../../components/Navigation/Header/Header';

class Layout extends Component
{
    render()
    {
        return(
            <Aux>
                <Header />
            </Aux>
        );
    }
}
export default Layout;