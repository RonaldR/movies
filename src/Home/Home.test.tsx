import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

import { searchMovie } from '../utils/api';

jest.mock('../utils/api');

beforeEach(() => {
	jest.resetAllMocks();
});
test('Home successfull fetched movies', async () => {

	// Default Matrix
	searchMovie.mockResolvedValueOnce({ "Search": [{ "Title": "The Matrix", "Year": "1999", "imdbID": "tt0133093", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" }, { "Title": "The Matrix Reloaded", "Year": "2003", "imdbID": "tt0234215", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" }, { "Title": "The Matrix Revolutions", "Year": "2003", "imdbID": "tt0242653", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "The Matrix Revisited", "Year": "2001", "imdbID": "tt0295432", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_SX300.jpg" }, { "Title": "Enter the Matrix", "Year": "2003", "imdbID": "tt0277828", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NTYwNjk0M15BMl5BanBnXkFtZTgwODk3MDMwMTE@._V1_SX300.jpg" }, { "Title": "The Matrix: Path of Neo", "Year": "2005", "imdbID": "tt0451118", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BYWM2ZWU5MDUtYTU2ZS00ZDFmLWIyNGEtNWZkMjRmZjI2YzMzXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg" }, { "Title": "Armitage III: Dual Matrix", "Year": "2002", "imdbID": "tt0303678", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg" }, { "Title": "CR: Enter the Matrix", "Year": "2009", "imdbID": "tt1675286", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg" }, { "Title": "Sex and the Matrix", "Year": "2000", "imdbID": "tt0274085", "Type": "movie", "Poster": "N/A" }, { "Title": "The Matrix Online", "Year": "2005", "imdbID": "tt0390244", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTM5MDkwMF5BMl5BanBnXkFtZTcwMTAzMTEzMQ@@._V1_SX300.jpg" }], "totalResults": "98", "Response": "True" });

	const { getByTestId, asFragment, getByText, getAllByText } = render(<MemoryRouter><Home /></MemoryRouter>);
	// empty state
	expect(asFragment()).toMatchSnapshot();

	await waitFor(() => {
		expect(getAllByText(/the matrix/i)[0]).toBeInTheDocument();
	});

	// matrix movies
	expect(asFragment()).toMatchSnapshot();

	// 'Searched' for Fight Club
	searchMovie.mockResolvedValueOnce({ "Search": [{ "Title": "Fight Club", "Year": "1999", "imdbID": "tt0133093", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" }, { "Title": "The Matrix Reloaded", "Year": "2003", "imdbID": "tt0234215", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" }, { "Title": "The Matrix Revolutions", "Year": "2003", "imdbID": "tt0242653", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "The Matrix Revisited", "Year": "2001", "imdbID": "tt0295432", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTIzMTA4NDI4NF5BMl5BanBnXkFtZTYwNjg5Nzg4._V1_SX300.jpg" }, { "Title": "Enter the Matrix", "Year": "2003", "imdbID": "tt0277828", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NTYwNjk0M15BMl5BanBnXkFtZTgwODk3MDMwMTE@._V1_SX300.jpg" }, { "Title": "The Matrix: Path of Neo", "Year": "2005", "imdbID": "tt0451118", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BYWM2ZWU5MDUtYTU2ZS00ZDFmLWIyNGEtNWZkMjRmZjI2YzMzXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg" }, { "Title": "Armitage III: Dual Matrix", "Year": "2002", "imdbID": "tt0303678", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg" }, { "Title": "CR: Enter the Matrix", "Year": "2009", "imdbID": "tt1675286", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMTExMzY3NTQ1NjleQTJeQWpwZ15BbWU3MDAyMjk2NzM@._V1_SX300.jpg" }, { "Title": "Sex and the Matrix", "Year": "2000", "imdbID": "tt0274085", "Type": "movie", "Poster": "N/A" }, { "Title": "The Matrix Online", "Year": "2005", "imdbID": "tt0390244", "Type": "game", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTM5MDkwMF5BMl5BanBnXkFtZTcwMTAzMTEzMQ@@._V1_SX300.jpg" }], "totalResults": "98", "Response": "True" });

	const searchInput = getByTestId('search');
	fireEvent.change(searchInput, { target: { value: 'Fight Club' } });
	expect(searchInput.value).toBe('Fight Club');

	await waitFor(() => {
		expect(getByText(/fight club/i)).toBeInTheDocument();
	});

	// matrix fight club
	expect(asFragment()).toMatchSnapshot();
	expect(searchMovie).toHaveBeenCalledTimes(2);
	expect(searchMovie).toHaveBeenCalledWith('matrix');
	expect(searchMovie).toHaveBeenCalledWith('Fight Club');
});


