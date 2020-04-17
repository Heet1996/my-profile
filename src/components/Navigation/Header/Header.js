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
                <div className="menu-toggle" id="toogle">
                            <div className="line"></div>
                            <div className="line"></div>
                </div>    
                
                <nav className="navigation" id="js-menu">

                    <a href="#" className="close" id="close"></a>
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
// //JS for maain menu to toogle
document.addEventListener('DOMContentLoaded',()=>{

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('toogle');
    let navBarClose= document.getElementById('close');
    navBarToggle.addEventListener('click', function () {
     mainNav.classList.toggle('activeNav');
    });
    mainNav.addEventListener('click', function () {
        mainNav.classList.toggle('activeNav');
       });
});

export default Header;