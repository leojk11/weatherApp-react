import React from 'react';

// css
import './header.component.css';

// components
import CloudIcon from '@material-ui/icons/Cloud';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__wrapper">
                <div className="logo">
                    <CloudIcon style={{ color: '#fff' }} />
                    <h2>Weather</h2>
                </div>

                <div className="search">
                    <SearchIcon style={{ color: '#000000' }} />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Header;
