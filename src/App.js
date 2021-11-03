import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './components/Home';
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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/:movieId' element={<Movie />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
