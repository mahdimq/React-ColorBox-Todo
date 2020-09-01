import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// SMOKE TEST
it('renders without crashing', function () {
	render(<TodoList />);
});
// SNAPSHOT TEST
it('matches snapshot', function () {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo', function () {
	const { getByLabelText, queryByText } = render(<TodoList />);

	expect(queryByText('X')).not.toBeInTheDocument();

	const input = getByLabelText('Enter Todo');
	const submitBtn = queryByText('Add todo');

	// fill out the form
	fireEvent.change(input, { target: { value: 'Iron Clothes' } });
	fireEvent.click(submitBtn);

	// todo exists!
	expect(queryByText('Iron Clothes')).toBeInTheDocument();
});

it('can remove a todo', function () {
	const { getByLabelText, queryByText, getByText } = render(<TodoList />);

	const input = getByLabelText('Enter Todo');
	const submitBtn = getByText('Add todo');

	// fill out the form
	fireEvent.change(input, { target: { value: 'Wash dishes' } });
	fireEvent.click(submitBtn);
	const removeBtn = getByText('X');

	expect(queryByText('Wash dishes')).toBeInTheDocument();
	fireEvent.click(removeBtn);
	// todo does not exist!
	expect(queryByText('Wash dishes')).not.toBeInTheDocument();
});
