import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// component
import Grid from './Grid';
import Spinner from './Spinner';
import Breadcrumb from './Breadcrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Slider from './Slider';

// image
import NoImage from '../images/no_image.jpg'

//hook
import { useMovieFetch } from '../hooks/useMovieFetch';
import Thumb from './Thumb';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie.similarMovie);

    if (loading)
        return <Spinner />;
    if (error)
        return <div>Something went wrong</div>;
    return (
        <>
            <Breadcrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />

            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
            <Slider title='Similar Movie'>
                {movie.similarMovie.map(similarMovie => (
                    <Link to={`/${similarMovie.id}`}>
                        <Thumb
                            key={similarMovie.id}
                            image={
                                similarMovie.poster_path
                                    ? IMAGE_BASE_URL + POSTER_SIZE + similarMovie.poster_path
                                    : NoImage
                            }
                            movieId={similarMovie.id} />
                    </Link>
                ))}
            </Slider>
        </>
    )
}

export default Movie;