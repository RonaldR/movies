import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetailListItem from '../MovieDetailListItem/MovieDetailListItem';
import { getMovie } from '../utils/api';

import { Movie } from '../types/types';

import './MovieDetail.scss';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<Movie | undefined>()
    const [message, setMessage] = useState('⏳');

    useEffect(() => {
        (async () => {
            try {
                const json = await getMovie(movieId);
                if (json) {
                    if (json.Response === 'True') {
                        setMovie(json);
                    } else {
                        setMessage('Movie not found 😢');
                    }
                } else {
                    setMessage('Error while getting your movie 😢');
                }
            } catch (error) {
                setMessage('Error while getting your movie 😢');
            }
        })();

    }, [movieId]);

    return <>
        <article className="movie-detail">
            {movie ? (
                <>
                    <h1>{movie.Title} ({movie.Year})</h1>
                    <p>{movie.Plot}</p>

                    <div className="movie-detail__details">
                        <figure className="poster">
                            <img src={movie.Poster} alt="" />
                        </figure>

                        <ul className="movie-detail__list">
                            <MovieDetailListItem label="Rating" item={`${movie.imdbRating} (IMDB)`} link={`https://www.imdb.com/title/${movie.imdbID}/`} />
                            <MovieDetailListItem label="Metascore" item={movie.Metascore} />
                            <MovieDetailListItem label="Director(s)" item={movie.Director} />
                            <MovieDetailListItem label="Writer(s)" item={movie.Writer} />
                            <MovieDetailListItem label="Actors" item={movie.Actors} />
                            <MovieDetailListItem label="Genre" item={movie.Genre} />
                            <MovieDetailListItem label="Rated" item={movie.Rated} />
                            <MovieDetailListItem label="Runtime" item={movie.Runtime} />
                            {movie.BoxOffice !== 'N/A' && <MovieDetailListItem label="Money" item={movie.BoxOffice} />}
                            <MovieDetailListItem label="Awards" item={movie.Awards} />
                        </ul>
                    </div>
                </>)
                : <p className="message">{message}</p>}
        </article>

        <Link to="/" className="back-link">
            <span className="back-link__icon" role="img" aria-label="arrow-back">⬅️</span> Back to searching for more
        </Link>
    </>;
}


export default MovieDetail;
