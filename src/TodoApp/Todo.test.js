import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

// SMOKE TEST
it('renders component without crashing', () => {
	render(<Todo />);
});

// SNAPSHOT TEST
it('matches snapshot', () => {
	const { asFragment } = render(<Todo />);
	expect(asFragment()).toMatchSnapshot();
});
