import React from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// component
import Grid from './Grid';
import Spinner from './Spinner';
import Breadcrumb from './Breadcrumb';
import TVShowInfo from './TVShowInfo';
import TVShowInfoBar from './TVShowInfoBar';
import Actor from './Actor';
import Slider from './Slider';
import TVShowThumb from './TVShowThumb';

// image
import NoImage from '../images/no_image.jpg'

//hook
import { useTVShowFetch } from '../hooks/useTVShowFetch';

const Movie = () => {
    const { tvShowId } = useParams();
    const { state: movie, loading, error } = useTVShowFetch(tvShowId);

    if (loading)
        return <Spinner />;
    if (error)
        return <div>Something went wrong</div>;
    return (
        <>
            <Breadcrumb movieTitle={movie.original_name} />
            <TVShowInfo movie={movie} />
            <TVShowInfoBar
                episodeTime={movie.episode_run_time}
                numberOfEpisode={movie.number_of_episodes}
                numberOfSeason={movie.number_of_seasons}
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
            {
                movie.similarMovie ?
                    <Slider title='Similar TV Show'>
                        {movie.similarMovie.map(similarMovie => (
                                <TVShowThumb
                                    key={similarMovie.id}
                                    image={
                                        similarMovie.poster_path
                                            ? IMAGE_BASE_URL + POSTER_SIZE + similarMovie.poster_path
                                            : NoImage
                                    }
                                    clickable
                                    tvShowId={similarMovie.id} />
                        ))}
                    </Slider> : null
            }
        </>
    )
}

export default Movie;