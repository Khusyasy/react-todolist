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

	return (
		<Paper>
			<Header />

			<TodoForm />

			<Todos todos={todos} />
		</Paper>
	);
};

export default TodoList;
