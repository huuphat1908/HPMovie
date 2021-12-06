import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

/* import RMDBLogo from '../../images/react-movie-logo.svg'; */
import TMDBLogo from '../../images/tmdb_logo.svg';
import HPMovieLogo from '../../images/HPMovie.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg, NavBar } from './Header.styles';

//context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context);

    return (
        <Wrapper>
            <Content>
                <NavBar>
                    {user ? (
                        <li>{user.username}</li>
                    ) : (
                        <Link to='/login'>
                            <li>Log in</li>
                        </Link>
                    )
                    }
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/top-rated'>
                        <li>Top Rated</li>
                    </Link>
                    <Link to='/tv-show'>
                        <li>TV Show</li>
                    </Link>
                </NavBar>
                <Link to='/'>
                    <LogoImg src={HPMovieLogo} alt='rmdb-logo' />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
};

export default Header;

