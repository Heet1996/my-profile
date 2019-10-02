import React,{Component} from 'react';
import classes from './Header.css';

class Header extends Component
{
    render()
    {
        return(
            <div className="navigation">
                <nav className={classes.navigation_name}>
                    <ul>
                        <li className={classes.navigation__item}><a href="/" className="navigation__link">Home</a></li>
                        <li className={classes.navigation__item}><a href="/about" className="navigation__link">About Me</a></li>
                        <li className={classes.navigation__item}><a href="/portfolio" className="navigation__link">Portfolio</a></li>
                        <li className={classes.navigation__item}><a href="/skills" className="navigation__link">Skills</a></li>
                        <li className={classes.navigation__item}><a href="/connect" className="navigation__link">Connect</a></li>

                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;