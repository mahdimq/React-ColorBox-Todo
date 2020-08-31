import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
	const INITIAL_STATE = [{ id: uuid(), todo: '' }];

	const [todos, setTodos] = useState(INITIAL_STATE);

	const addTodo = (newTodo) => {
		setTodos((todos) => [...todos, { id: uuid(), ...newTodo }]);
	};

	const handleDelete = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<NewTodoForm addTodo={addTodo} />
			{todos.map((items) => (
				<Todo todo={items.todo} key={items.id} id={items.id} deleteTodo={handleDelete} />
			))}
		</div>
	);
}

export default TodoList;
