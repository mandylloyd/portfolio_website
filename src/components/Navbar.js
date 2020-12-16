import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
                <div className="ui two item menu">

                    <a className="item item-color">
                        <Link to={'/about'}>About Me</Link>
                    </a>


                    <a className="item item-color">
                        <Link to={'/portfolio'}>Portfolio</Link>
                    </a>


                    {/* <a className="item item-color">
                        <Link to={'/contact'}>Contact</Link>
                    </a> */}

                </div>
        </div>
    )
};

export default Navbar;
