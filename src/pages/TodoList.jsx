import React, { useState } from "react";

import Paper from "../components/Paper.jsx";
import Header from "../components/Header.jsx";
import TodoForm from "../components/TodoForm.jsx";
import Todos from "../components/Todos.jsx";

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ text: "react" },
		{ text: "belajar" },
		{ text: "di" },
		{ text: "wegodev" }
	]);

	const [showAdd, setShowAdd] = useState(false);

	const showAddToggle = () => setShowAdd(!showAdd);

	const addTodo = value => {
		const addedTodos = [...todos, { text: value }];

		setTodos(addedTodos);
	};
	console.log("showAdd", showAdd);
	return (
		<Paper>
			<Header showAddToggle={showAddToggle} showAdd={showAdd} />

			<TodoForm addTodo={addTodo} showAdd={showAdd} />

			<Todos todos={todos} />
		</Paper>
	);
};

export default TodoList;
