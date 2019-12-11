import React, {Component} from 'react';
import './Screen.css'
import PropTypes from 'prop-types';

class Screen extends Component {

	render() {
		const number = this.props.text;
		return(
			<div className="Screen">
				<h3>{number}</h3>
			</div>
		)
	};
};

Screen.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Screen;
