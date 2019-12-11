import React from 'react';
import './OperationPanel.css'
import Button from '../Button/Button'

const OperationPanel = (props) => {
	const setOperation = props.setOperation;
	const onClear = props.onClear;

	return(
		<div className="OperationPanel">
			<Button label="C" onClick={() => {onClear('С')}}/>
			<Button label="+" onClick={() => {setOperation('+')}}/>
			<Button label="-" onClick={() => {setOperation('-')}}/>
			<Button label="/" onClick={() => {setOperation('/')}}/>
			<Button label="*" onClick={() => {setOperation('*')}}/>
		</div>
	)

};

export default OperationPanel;
