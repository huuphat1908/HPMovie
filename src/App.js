import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './components/Home';
import TopRated from './components/TopRated';
import TVShows from './components/TVShows';
import TVShow from './components/TVShow';
import Movie from './components/Movie';
import Login from './components/Login';
import NotFound from './components/NotFound';

//provider
import UserProvider from './context';

// styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/top-rated' element={<TopRated />} />
        <Route path='/tv-show' element={<TVShows />} />
        <Route path='/movie/:movieId' element={<Movie />} />
        <Route path='/tv-show/:tvShowId' element={<TVShow />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
