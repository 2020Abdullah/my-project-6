import React, {Component} from "react";
import "./Header.scss";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    handleMenu = (e) => {
        let box = document.querySelector('.Header-box');
        box.classList.toggle('show');
    }  
    
    render(){
        return(
            <header>
                <div className="Header-box" id="navbarNav">
                    <button className="navbar-toggler menu-icon" type="button" onClick={this.handleMenu}>
                        <i className="fas fa-bars"></i>       
                    </button>
                <div className="container">
                <div className="Logo">
                    <span>x</span>
                    <a href="/" className="navbar-brand">Xtra Blog</a>
                </div>
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive? "nav-link active": 'nav-link'}>
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Single_post" className={({ isActive }) => isActive? "nav-link active": 'nav-link'}>
                                <i className="fas fa-pen"></i>
                                <span>Single Post</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className={({ isActive }) => isActive? "nav-link active": 'nav-link'}>
                                <i className="fa fa-users"></i>
                                <span>About</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact" className={({ isActive }) => isActive? "nav-link active": 'nav-link'}>
                                <i className="fa fa-comments"></i>
                                <span>Contact Us</span>                           
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </nav>
                </div>

                </div>
            </header>
        );
    }
}

export default Header;