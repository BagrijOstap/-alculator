import React from 'react';
import './InputsContainer'
import NumbersPanel from './NumbersPanel/NumbersPanel'

const InputsContainer = (props) => {
		return(
			<div className="InputsContainer">
				<NumbersPanel onNumberClick={props.onNumberClick}/>
			</div>
		)
};

export default InputsContainer;