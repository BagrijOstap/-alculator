import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { label, onClick } = props;
	return(
		<div className="simpleButton">
			<button onClick={onClick}>{label}</button>
		</div>
	)

};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Button;
