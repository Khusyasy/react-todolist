import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo.jsx";

const Todos = ({ todos, completeTodo }) => {
	return (
		<section className="todos">
			{todos.map((todo, index) => {
				return (
					<Todo
						key={index}
						text={todo.text}
						completeTodo={completeTodo}
						index={index}
						isCompleted={todo.isCompleted}
					/>
				);
			})}
		</section>
	);
};

Todos.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string
		})
	),
	completeTodo: PropTypes.func.isRequired
};

export default Todos;
