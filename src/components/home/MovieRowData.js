import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieRowData = ({ movie, number, addToList }) => {
  // const { movie, number } = props;
  // const [favMovies, setFavMovies] = useState([...movie]);

  const toggleAddList = () => {

  }

  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{movie.Title}</td>
      <td>{movie.Year}</td>
      <td>{movie.imdbID}</td>
      <td>
        <button type='button' className='btn btn-link' onClick={() => { addToList(movie) }} style={{ color: `orange` }}>
          <i className="fas fa-star" color='warning' />
        </button>
      </td>
      <td>
        <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
          Details &nbsp;
          <i className="fas fa-chevron-right" />
        </Link>
      </td>
    </tr>
  );
}

export default MovieRowData;
