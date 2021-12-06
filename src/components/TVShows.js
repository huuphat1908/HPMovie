import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import TVShowThumb from './TVShowThumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

//hook
import { useTVShowsFetch } from '../hooks/useTVShowsFetch'

//image
import NoImage from '../images/no_image.jpg';

const TopRated = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useTVShowsFetch();

    if (error)
        return <div>Something went wrong</div>;
    return (
        <>
            {!searchTerm && state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />) : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'TV Shows'}>
                {state.results.map(movie => (
                    <TVShowThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        tvShowId={movie.id}/>
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => {
                    setIsLoadingMore(true);
                }} />
            )}
        </>
    )
};

export default TopRated;