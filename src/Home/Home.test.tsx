import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// TODO: add more tests and api mock

describe('Home', () => {
	test('renders search input', () => {
		const { getByTestId, asFragment } = render(<Home />);
		const searchInput = getByTestId('search');
		expect(searchInput).toBeInTheDocument();
		expect(asFragment()).toMatchSnapshot();
	});

	test('search input value can change', () => {
		const { getByTestId } = render(<MemoryRouter><Home /></MemoryRouter>);
		const searchInput = getByTestId('search');
		fireEvent.change(searchInput, { target: { value: '23' } });
		expect(searchInput.value).toBe('23');
	});

	test('api call function', async () => {
		const { getByTestId, asFragment } = render(<MemoryRouter><Home /></MemoryRouter>);
		const searchInput = getByTestId('search');
		fireEvent.change(searchInput, { target: { value: '23' } });
		expect(asFragment()).toMatchSnapshot();
	});
});
