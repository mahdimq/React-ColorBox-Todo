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

// it('should add new box', () => {
// 	const { queryByText, getByLabelText } = render(<BoxList />);
// 	const input = getByLabelText('Width');
// 	const input = getByLabelText('Background Color');
// 	const button = queryByText('Add Box');

// 	expect(queryByText('Width: 100px')).not.toBeInTheDocument();
// 	fireEvent.change(input, { target: { value: '100px' } });
// 	fireEvent.click(button);
// 	expect(queryByText('Width: 100px')).toBeInTheDocument();
// });
