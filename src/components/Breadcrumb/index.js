import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//styles
import { Wrapper, Content } from './Breadcrumb.styles';

const Breadcrumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle || 'Login'}</span>
            </Content>
        </Wrapper>
    )
}

Breadcrumb.propTypes = {
    movieTitle: PropTypes.string,
}

export default Breadcrumb;