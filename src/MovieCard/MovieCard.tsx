import React from 'react';
import { Link } from 'react-router-dom';
import { MovieSearch } from '../types/types';

import './MovieCard.scss';

type Props = {
    movie: MovieSearch
}

const MovieCard = ({ movie }: Props) => (
    <li key={movie.imdbID} className="movie-card">
        <Link to={`/detail/${movie.imdbID}`} className="movie-card__link">
            <figure className="movie-card__poster">
                <img src={movie.Poster} alt="" />
            </figure>
            <div className="movie-card__title">
                {movie.Title} ({movie.Year})
            </div>
        </Link>
    </li >
);

export default MovieCard;
