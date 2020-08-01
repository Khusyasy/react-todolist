import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color }) => {
	const className = [
		"header-btn",
		color === "black" && "black-color",
		color === "red" && "red-color"
	].join(" ");
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	text: "Button",
	color: "black"
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	color: PropTypes.oneOf(["black", "red"])
};

export default Button;
