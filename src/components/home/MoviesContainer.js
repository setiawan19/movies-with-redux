import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieRowData from './MovieRowData';
import {
  addToListMovie
} from '../../actions/searchActions';
export class MoviesContainer extends Component {
  constructor(props) {
    super(props);
  };
  debugger
  render() {
    const { movies, handleFavMovies } = this.props;
    let myMovies = [];
    let content = '';
    let movieDetail = [];
    let isOpenModal = false;
    let favoriteMovies = [];

    const addToList = (dataModal) => {
      favoriteMovies.push(dataModal);
      handleFavMovies(favoriteMovies);
    };


    content = movies.Response === 'True' ? movies.Search.map((movie, index) => (
      <MovieRowData key={index} number={index + 1} movie={movie} addToList={addToList} />
    )) : null;

    return (
      <div className='row'>

        {movies.Response === 'True' ?
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">imdbID</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {content}
            </tbody>
          </table> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps, { addToListMovie })(MoviesContainer);
