import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//styles
import { Image } from './MovieThumb.styles';

const MovieThumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable && movieId ? 
            <Link to={`/movie/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
            : 
            <Image src={image} alt='movie-thumb'/>
        }
    </div>
)

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default MovieThumb;