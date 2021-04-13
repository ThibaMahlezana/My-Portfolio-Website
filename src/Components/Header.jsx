import React from 'react'

function Header (){
    return(
        <div>
        <header className="header">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="logo"><a href="">T M</a></div>
                    <div className="hamburger-btn outer-shadow hover-in-shadow">
                        <span></span>
                    </div>
                </div>
            </div>
            <nav className="nav-menu">
                <div className="close-nav-menu">&times;</div>
                <div className="nav-menu-inner">
                    <ul>
                        <li><a></a></li>
                    </ul>
                </div>
            </nav>
        </header>
        
        </div>
    );
}

export default Header;