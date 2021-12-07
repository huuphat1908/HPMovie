import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* import RMDBLogo from '../../images/react-movie-logo.svg'; */
import TMDBLogo from '../../images/tmdb_logo.svg';
import HPMovieLogo from '../../images/HPMovie.svg';
import HamburgerMenu from '../../images/hamburger-menu.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg, NavBar, HamburgerMenuImg, MobileNavBar } from './Header.styles';

//context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context);
    const [showMobileNavBar, setShowMobileNavBar] = useState(false);

    useEffect(() => {
        if (showMobileNavBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible'; 
        }
    }, [showMobileNavBar]);

    const handleMobileNavBar = () => {
        setShowMobileNavBar(true);
    }

    const closeMobileNavBar = () => {
        setShowMobileNavBar(false);
    }

    return (
        <Wrapper>
            <Content>
                <HamburgerMenuImg src={HamburgerMenu} alt='hambuger menu' onClick={handleMobileNavBar} />
                <NavBar>
                    {user ? (
                        <li>{user.username}</li>
                    ) : (
                        <li>
                            <Link to='/login'>
                                Log in
                            </Link>
                        </li>
                    )
                    }
                    <li className='active'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/top-rated'>
                            Top Rated
                        </Link>
                    </li>
                    <li>
                        <Link to='/tv-show'>
                            TV Show
                        </Link>
                    </li>
                </NavBar>
                <MobileNavBar isShow={showMobileNavBar}>
                    <span onClick={closeMobileNavBar}>x</span>
                    {user ? (
                        <li>{user.username}</li>
                    ) : (
                        <li>
                            <Link to='/login'>
                                Log in
                            </Link>
                        </li>
                    )
                    }
                    <li className='active'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/top-rated'>
                            Top Rated
                        </Link>
                    </li>
                    <li>
                        <Link to='/tv-show'>
                            TV Show
                        </Link>
                    </li>
                </MobileNavBar>
                <Link to='/'>
                    <LogoImg src={HPMovieLogo} alt='rmdb-logo' />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
};

export default Header;

