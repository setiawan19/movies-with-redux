import React, { Component } from 'react';
import MovieRowData from './MovieRowData';

export class FavMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: JSON.parse(localStorage.getItem("listFavouriteMovies")),
            content: ''
        };
    };
    render() {

        this.state.content = this.state.movies.length > 0 ? this.state.movies.map((movie, index) => (
            <MovieRowData key={index} number={index + 1} movie={movie} />
        )) : null;

        return (
            <div className='container'>
                <div className='row'>
                    {this.state.content !== "" && this.state.content ?
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
                                {this.state.content}
                            </tbody>
                        </table> : null}
                </div>
            </div>
        );
    }
}

export default FavMovies;
