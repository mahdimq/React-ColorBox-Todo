import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
	const INITIAL_STATE = {
		width: '',
		height: '',
		backgroundColor: ''
	};

	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='width'>Width</label>
			<input
				id='width'
				type='number'
				name='width'
				min={0}
				placeholder='Box Width'
				value={formData.width}
				onChange={handleChange}
			/>
			<label htmlFor='height'>Height</label>
			<input
				id='height'
				type='number'
				name='height'
				min={0}
				placeholder='Box Height'
				onChange={handleChange}
				value={formData.height}
			/>
			<label htmlFor='backgroundColor'>Background Color</label>
			<input
				id='backgroundColor'
				type='text'
				name='backgroundColor'
				placeholder='Background Color'
				onChange={handleChange}
				value={formData.backgroundColor}
			/>
			<button>Add Box</button>
		</form>
	);
}

export default NewBoxForm;
