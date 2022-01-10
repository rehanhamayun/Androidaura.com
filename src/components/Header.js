import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header>
                <div className="header-container">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand site-logo" href="/">
                            <img src="asstes/image/logo.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                {/* <li>
                                    <i class="fas fa-search"></i>
                                </li> */}
                                <li className="nav-item active">
                                    <Link to='/' class='nav-link'>
                                        HOME
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' class='nav-link'>
                                        ABOUT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/ContactUs' class='nav-link'>
                                     CONTACT US
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
