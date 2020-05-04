import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import MovieCard from '../MovieCard/MovieCard';
import { searchMovie } from '../utils/api';
import { MovieSearch } from '../types/types';

import './Home.scss';

const App = () => {
  const [movies, setMovies] = useState<Array<MovieSearch> | undefined>();
  const [loading, setLoading] = useState(true);

  const getMovies = async (search: string = 'matrix') => {
    setLoading(true);
    const response = await searchMovie(search);
    const json = await response.json();
    setLoading(false);
    return json.Search;
  }

  useEffect(() => {
    // IIFE
    (async () => {
      setMovies(await getMovies())
    })();
  }, []);

  // Debounce callback
  const [debouncedCallback] = useDebouncedCallback(
    // function
    async (value: string) => {
      setMovies(await getMovies(value));
    },
    // delay in ms
    200
  );

  return (
    <main className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={`search ${loading ? 'loading' : ''}`}>
          <input className="search__input" type="text" placeholder="Search movie (Matrix)" onChange={(e) => debouncedCallback(e.target.value)} data-testid="search" />
        </div>
      </form>

      <ul className="movies">
        {movies && movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </main>
  );
}

export default App;
