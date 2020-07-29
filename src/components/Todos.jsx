import React from "react";

import Todo from "./Todo.jsx";

const Todos = () => {
	const todos = [
		{
			text: "react"
		},
		{
			text: "belajar"
		},
		{
			text: "di"
		},
		{
			text: "wegodev"
		}
	];

	return (
		<section className="todos">
			{todos.map(todo => {
				return <Todo text={todo.text} />;
			})}
		</section>
	);
};

export default Todos;
