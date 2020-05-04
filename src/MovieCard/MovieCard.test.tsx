import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

test('movie card', async () => {
    const { asFragment } = render(<MemoryRouter><MovieCard movie={{ imdbID: 'tt00000', Title: 'The Matrix', Year: '1999', Poster: 'img', Type: 'Film' }} /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});
