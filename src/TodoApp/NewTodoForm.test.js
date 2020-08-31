import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// SMOKE TEST
it('renders without crashing', function () {
	render(<NewTodoForm />);
});

// SNAPSHOT TEST
it('matches snapshot', function () {
	const { asFragment } = render(<NewTodoForm />);
	expect(asFragment()).toMatchSnapshot();
});
