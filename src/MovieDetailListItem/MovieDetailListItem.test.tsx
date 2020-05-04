import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetailListItem from './MovieDetailListItem';

test('movie detail list item', async () => {
    const { asFragment } = render(<MovieDetailListItem item="yes" label="Best movie ever" />);
    expect(asFragment()).toMatchSnapshot();
});
