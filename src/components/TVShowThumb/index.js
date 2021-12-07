import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//styles
import { Image } from './TVShowThumb.styles';

const TVShowThumb = ({ image, tvShowId, clickable }) => (
    <div>
        {clickable ? 
            <Link to={`/tv-show/${tvShowId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
            : 
            <Image src={image} alt='movie-thumb'/>
        }
    </div>
)

TVShowThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default TVShowThumb;