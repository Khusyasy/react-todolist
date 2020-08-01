import React from "react";
import PropTypes from "prop-types";

import Button from "./Button.jsx";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
	return (
		<section className="header">
			{/* <button className="header-btn" onClick={showAddToggle}>
				{showAdd ? "Done" : "Add"}
            </button> */}
			<Button
				color="black"
				text={showAdd ? "Done" : "Add"}
				onClick={showAddToggle}
			/>
			<h1 className="header-title">Todo List</h1>
			{/* <button className="header-btn red-color" onClick={clearTodos}>
				Clear
			</button> */}
			<Button color="red" text="clear" onClick={clearTodos} />
		</section>
	);
};

Header.propTypes = {
	showAddToggle: PropTypes.func.isRequired,
	showAdd: PropTypes.bool.isRequired,
	clearTodos: PropTypes.func.isRequired
};

export default Header;
