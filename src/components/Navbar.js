import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">PokeTimes</Link>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">Home</NavLink></li>
                    <li><NavLink to="/contact">Home</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)