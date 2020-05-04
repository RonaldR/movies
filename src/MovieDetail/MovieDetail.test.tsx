import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetail from './MovieDetail';

import { getMovie } from '../utils/api';

jest.mock('../utils/api');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        movieId: 'tt0133093',
    }),
}));

beforeEach(() => {
    jest.resetAllMocks();
});

test('movie detail success', async () => {
    // Matrix
    getMovie.mockResolvedValueOnce({ "Title": "The Matrix", "Year": "1999", "Rated": "R", "Released": "31 Mar 1999", "Runtime": "136 min", "Genre": "Action, Sci-Fi", "Director": "Lana Wachowski, Lilly Wachowski", "Writer": "Lilly Wachowski, Lana Wachowski", "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving", "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "Language": "English", "Country": "USA", "Awards": "Won 4 Oscars. Another 37 wins & 50 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.7/10" }, { "Source": "Rotten Tomatoes", "Value": "87%" }, { "Source": "Metacritic", "Value": "73/100" }], "Metascore": "73", "imdbRating": "8.7", "imdbVotes": "1,597,196", "imdbID": "tt0133093", "Type": "movie", "DVD": "21 Sep 1999", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True" });

    const { asFragment, getByText } = render(<MemoryRouter initialEntries={["/detail/tt0133093"]}><MovieDetail /></MemoryRouter>);
    // empty state
    expect(asFragment()).toMatchSnapshot();

    await waitFor(() => {
        expect(getByText(/the matrix/i)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
    expect(getMovie).toHaveBeenCalledTimes(1);
    expect(getMovie).toHaveBeenCalledWith('tt0133093');
});

test('movie detail fetch response false', async () => {
    getMovie.mockResolvedValueOnce({ "Response": "False" });

    const { asFragment, getByText } = render(<MemoryRouter initialEntries={["/detail/tt0133093"]}><MovieDetail /></MemoryRouter>);

    await waitFor(() => {
        expect(getByText(/Movie not found/i)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
    expect(getMovie).toHaveBeenCalledTimes(1);
});

test('movie detail fetch empty', async () => {
    getMovie.mockResolvedValueOnce(null);

    const { asFragment, getByText } = render(<MemoryRouter initialEntries={["/detail/tt0133093"]}><MovieDetail /></MemoryRouter>);

    await waitFor(() => {
        expect(getByText(/Error while getting your movie/i)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
    expect(getMovie).toHaveBeenCalledTimes(1);
});