import React, { useState } from "react";

import Paper from "../components/Paper.jsx";
import Header from "../components/Header.jsx";
import TodoForm from "../components/TodoForm.jsx";
import Todos from "../components/Todos.jsx";

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ text: "react", isCompleted: false },
		{ text: "belajar", isCompleted: false },
		{ text: "di", isCompleted: false },
		{ text: "wegodev", isCompleted: false }
	]);

	const [showAdd, setShowAdd] = useState(false);

	const completeTodo = index => {
		const addedTodos = [...todos];
		addedTodos[index].isCompleted = !addedTodos[index].isCompleted;

		setTodos(addedTodos);
	};

	const showAddToggle = () => setShowAdd(!showAdd);

	const addTodo = value => {
		const addedTodos = [...todos, { text: value, isCompleted: false }];

		setTodos(addedTodos);
	};

	return (
		<Paper>
			<Header showAddToggle={showAddToggle} showAdd={showAdd} />

			<TodoForm addTodo={addTodo} showAdd={showAdd} />

			<Todos todos={todos} completeTodo={completeTodo} />
		</Paper>
	);
};

export default TodoList;
