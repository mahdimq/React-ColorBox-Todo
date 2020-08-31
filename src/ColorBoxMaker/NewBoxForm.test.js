import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// SMOKE TEST
it('renders component without crashing', () => {
	render(<NewBoxForm />);
});

// SNAPSHOT TEST
it('matches snapshot', () => {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();
});
