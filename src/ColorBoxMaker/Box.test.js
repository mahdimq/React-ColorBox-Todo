import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

// SMOKE TEST
it('renders component without crashing', () => {
	render(<Box />);
});

// SNAPSHOT TEST
it('matches snapshot', () => {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
});
