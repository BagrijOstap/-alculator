import React from 'react';
import './InputsContainer.css'
import NumbersPanel from './NumbersPanel/NumbersPanel'
import OperationPanel from './OperationPanel/OperationPanel'

const InputsContainer = (props) => {
		return(
			<div className="InputsContainer">
				<NumbersPanel onNumberClick={props.onNumberClick}/>
				<OperationPanel
					setOperation={props.setOperation}
					onClear={props.onClear}
				/>
			</div>
		)
};

export default InputsContainer;