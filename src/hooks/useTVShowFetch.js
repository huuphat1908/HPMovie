import { useState, useEffect } from 'react';

//api
import API from '../API';

//helpers
import { isPersistedState } from '../helpers';

export const useTVShowFetch = tvShowId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTVShow = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchTVShow(tvShowId);
                const credits = await API.fetchTVShowCredits(tvShowId);
                const similarMovie = await API.fetchSimilarTVShow(tvShowId);
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
        const sessionState = isPersistedState(tvShowId);
        if (sessionState) {
            setLoading(true);
            setState(sessionState);
            setLoading(false);
        }
        else {
            fetchTVShow();
        }
    }, [tvShowId]);

    //write to sessionStorage
    useEffect(() => {
        sessionStorage.setItem(`tvShow${tvShowId}`, JSON.stringify(state));
    }, [tvShowId, state]);

    return { state, loading, error };
} 