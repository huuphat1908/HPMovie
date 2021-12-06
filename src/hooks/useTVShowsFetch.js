import { useState, useEffect } from 'react';

//api
import API from '../API';

//helpers
import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useTVShowsFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchTVShows = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchTVShows(searchTerm, page);
            console.log(movies);
            setState(prev => ({
               ...movies,
               results:
               page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    //search and initial
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('tvShowsState');
            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        setState(initialState);
        fetchTVShows(1, searchTerm);
    }, [searchTerm]);

    //load more
    useEffect(() => {
        if (!isLoadingMore)
            return;
        fetchTVShows(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    //write to sessionStorage
    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem('tvShowsState', JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}