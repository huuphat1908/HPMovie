import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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

    const openMobileNavBar = () => {
        setShowMobileNavBar(true);
    }

    const closeMobileNavBar = () => {
        setShowMobileNavBar(false);
    }

    return (
        <Wrapper>
            <Content>
                <HamburgerMenuImg src={HamburgerMenu} alt='hambuger menu' onClick={openMobileNavBar} />
                <NavBar>
                    <ul>
                        {user ? (
                            <li>{user.username}</li>
                        ) : (
                            <li>
                                <NavLink to='/login'>
                                    Log in
                                </NavLink>
                            </li>
                        )
                        }
                        <li>
                            <NavLink end to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/top-rated'>
                                Top Rated
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/tv-show'>
                                TV Show
                            </NavLink>
                        </li>
                    </ul>
                </NavBar>
                <MobileNavBar isShow={showMobileNavBar}>
                    <span onClick={closeMobileNavBar}>x</span>
                    <ul>
                        {user ? (
                            <li>{user.username}</li>
                        ) : (
                            <li>
                                <NavLink to='/login'>
                                    Log in
                                </NavLink>
                            </li>
                        )
                        }
                        <li>
                            <NavLink end to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/top-rated'>
                                Top Rated
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/tv-show'>
                                TV Show
                            </NavLink>
                        </li>
                    </ul>
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

