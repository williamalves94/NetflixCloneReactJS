import React from 'react';

import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"></img>
                </a>
            </div>
        </header>
    );
}