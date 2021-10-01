import React from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// component
import Grid from './Grid';
import Spinner from './Spinner';

// image
import NoImage from '../images/no_image.jpg'

//hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    return (
        <>
            <div>Movie</div>
        </>
    )
}

export default Movie;