import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

// SMOKE TEST
it('renders component without crashing', () => {
	render(<BoxList />);
});

// SNAPSHOT TEST
it('matches snapshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('should add new box', () => {
	const { queryByText, getByLabelText, getByText } = render(<BoxList />);
	const width = getByLabelText('Width');
	const height = getByLabelText('Height');
	const background = getByLabelText('Background Color');
	const addButton = queryByText('Add Box');

	expect(queryByText('X')).not.toBeInTheDocument();

	fireEvent.change(width, { target: { value: '100px' } });
	fireEvent.change(height, { target: { value: '100px' } });
	fireEvent.change(background, { target: { value: 'red' } });
	fireEvent.click(addButton);

	const removeBtn = getByText('X');
	expect(removeBtn).toBeInTheDocument();
});

it('can remove a new box', function () {
	const { getByLabelText, queryByText, getByText } = render(<BoxList />);

	const width = getByLabelText('Width');
	const height = getByLabelText('Height');
	const background = getByLabelText('Background Color');
	const addButton = queryByText('Add Box');

	// fill out the form
	fireEvent.change(width, { target: { value: '100px' } });
	fireEvent.change(height, { target: { value: '100px' } });
	fireEvent.change(background, { target: { value: 'red' } });
	fireEvent.click(addButton);

	// item exists!
	const removeBtn = getByText('X');
	fireEvent.click(removeBtn);
	expect(removeBtn).not.toBeInTheDocument();
});
