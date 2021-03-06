import axios from 'axios';

import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TOPRATED_BASE_URL,
  TVSHOW_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
} from './config';

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    const movies = (await axios.get(endpoint)).data;
    return movies;
  },

  fetchTopRatedMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${TOPRATED_BASE_URL}&page=${page}`;
    const movies = (await axios.get(endpoint)).data;
    return movies;
  },

  fetchTVShows: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${TVSHOW_BASE_URL}&page=${page}`;
    const movies = (await axios.get(endpoint)).data;
    return movies;
  },

  fetchTVShow: async tvShowId => {
    const endpoint = `${API_URL}tv/${tvShowId}?api_key=${API_KEY}&append_to_response=videos`;
    const movie = (await axios.get(endpoint)).data;
    return movie;
  },

  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    const movie = (await axios.get(endpoint)).data;
    return movie;
  },

  fetchSimilarMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`;
    const movie = (await axios.get(endpoint)).data;
    return movie;
  },

  fetchSimilarTVShow: async tvShowId => {
    const endpoint = `${API_URL}tv/${tvShowId}/similar?api_key=${API_KEY}`;
    const movie = (await axios.get(endpoint)).data;
    return movie;
  },

  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const credits = (await axios.get(creditsEndpoint)).data;
    return credits;
  },

  fetchTVShowCredits: async tvShowId => {
    const creditsEndpoint = `${API_URL}tv/${tvShowId}/credits?api_key=${API_KEY}`;
    const credits = (await axios.get(creditsEndpoint)).data;
    return credits;
  },

  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = (await axios.get(REQUEST_TOKEN_URL)).data;
    return reqToken.request_token;
  },

  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = (await axios.post(LOGIN_URL, bodyData)).data;
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = (await axios.post(SESSION_ID_URL, {
        request_token: requestToken
      })).data;
      return sessionId;
    }
  },

  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
    const rating = (await axios.post(endpoint, {
      value
    })).data;
    return rating;
  },

  rateTVShow: async (sessionId, tvShowId, value) => {
    const endpoint = `${API_URL}tv/${tvShowId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
    const rating = (await axios.post(endpoint, {
      value
    })).data;
    return rating;
  }
};

export default apiSettings;
