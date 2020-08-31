import React from 'react';

function Todo({ id, todo, deleteTodo }) {
	return (
		<div>
			<span>{todo}</span>
			<button onClick={() => deleteTodo(id)}>X</button>
		</div>
	);
}

export default Todo;
