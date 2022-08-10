import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import FavMovies from './components/home/FavMovies';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/fav" component={FavMovies} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
