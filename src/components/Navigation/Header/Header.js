import React,{Component} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import Logo from '../../UI/Logo';
import {typeString} from '../../Home/Home';
class Header extends Component
{
    render()
    {
        return(
                <header className="header">
                <Logo />
                <nav className="navigation">
                
                    <ul className="navigation__list">
                        <li className="navigation__item" onClick={typeString}>
                            <Link to="/" className="navigation__link">Home</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/about" className="navigation__link">About Me</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/portfolio" className="navigation__link">Portfolio</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/skills" className="navigation__link">Skills</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/connect" className="navigation__link">Connect</Link>
                        </li>

                    </ul>
                </nav>
                </header>
            
        );
    }
}
export default Header;