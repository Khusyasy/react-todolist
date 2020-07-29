import React from "react";
import "./styles.css";

import Paper from "./components/Paper.jsx";
import Header from "./components/Header.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Todos from "./components/Todos.jsx";

export default function App() {
	return (
		<Paper>
			<Header />

			<TodoForm />

			<Todos />
		</Paper>
	);
}
