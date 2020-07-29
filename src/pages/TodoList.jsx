import React from "react";

import Paper from "../components/Paper.jsx";
import Header from "../components/Header.jsx";
import TodoForm from "../components/TodoForm.jsx";
import Todos from "../components/Todos.jsx";

const TodoList = () => {
	return (
		<Paper>
			<Header />

			<TodoForm />

			<Todos />
		</Paper>
	);
};

export default TodoList;
