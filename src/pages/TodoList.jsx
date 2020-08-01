import React, { useState } from "react";

import Paper from "../components/Paper.jsx";
import Header from "../components/Header.jsx";
import TodoForm from "../components/TodoForm.jsx";
import Todos from "../components/Todos.jsx";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const [showAdd, setShowAdd] = useState(false);

	const completeTodo = index => {
		const addedTodos = [...todos];
		addedTodos[index].isCompleted = !addedTodos[index].isCompleted;

		setTodos(addedTodos);
	};

	const clearTodos = () => !showAdd && setTodos([]);

	const showAddToggle = () => setShowAdd(!showAdd);

	const addTodo = value => {
		if (todos.length < 10) {
			const addedTodos = [...todos, { text: value, isCompleted: false }];

			setTodos(addedTodos);
		} else {
			alert("no more than 10 todos allowed");
		}
	};

	return (
		<Paper>
			<Header
				showAddToggle={showAddToggle}
				showAdd={showAdd}
				clearTodos={clearTodos}
			/>

			<TodoForm addTodo={addTodo} showAdd={showAdd} />

			<Todos todos={todos} completeTodo={completeTodo} />
		</Paper>
	);
};

export default TodoList;
