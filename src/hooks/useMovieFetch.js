import { useState, useEffect } from 'react';

//api
import API from '../API';

//helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const similarMovie = await API.fetchSimilarMovie(movieId);
                //get directors only
                const directors = credits.crew.filter(member => member.job === 'Director');
                setState({
                    ...movie,
                    similarMovie: similarMovie.results,
                    actors: credits.cast,
                    directors
                })
                setLoading(false);
            }
            catch (error) {
                setError(true);
            }
        }
        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setLoading(true);
            setState(sessionState);
            setLoading(false);
        }
        else {
            fetchMovie();
        }
    }, [movieId]);

    //write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return { state, loading, error };
} 