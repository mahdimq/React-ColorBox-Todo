import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
	const [formData, setFormData] = useState({ todo: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(formData);
		setFormData({ todo: '' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='todo'>Enter Todo</label>
			<input
				id='todo'
				type='text'
				name='todo'
				placeholder='Wash car...'
				value={formData.todo}
				onChange={handleChange}
			/>

			<button>Add todo</button>
		</form>
	);
}

export default NewTodoForm;
