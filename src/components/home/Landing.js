import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favMovies: [],
      isPageFavMovies: false
    };
  }
  handleFavMovies = (favMovies) => {
    this.state.favMovies = favMovies;
    const data = this.state.favMovies;
    localStorage.setItem('listFavouriteMovies', JSON.stringify(data));
  }
  render() {
    const { loading } = this.props;

    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer handleFavMovies={this.handleFavMovies} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
