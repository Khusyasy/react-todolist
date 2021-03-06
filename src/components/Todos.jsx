import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo.jsx";

const Todos = ({ todos, completeTodo }) => {
	return (
		<section className="todos">
			{todos.length > 0 &&
				todos.map((todo, index) => {
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
			{todos.length === 0 && (
				<div className="todo-placeholder-text">
					Add todo by clicking{" "}
					<span className="add-button-placeholder-text">Add</span>{" "}
					button on the left top corner
				</div>
			)}
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
