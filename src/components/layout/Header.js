import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top ">
            <Link className="navbar-brand" to="/">Top Coins</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Market Overview</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/liquidity">Liquidity</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;