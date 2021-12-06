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

export const useTVShowFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchTVShow(searchTerm, page);
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
            const sessionState = isPersistedState('tvShowState');
            if (sessionState) {
                setState(sessionState);
                return;
            }
        }
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    //load more
    useEffect(() => {
        if (!isLoadingMore)
            return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    //write to sessionStorage
    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem('tvShowState', JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}