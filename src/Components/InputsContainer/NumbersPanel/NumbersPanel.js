import React from 'react';
import './NumbersPanel';
import Button from '../Button/Button'

const NumbersPanel = (props) => {
	const onNumberClick = props.onNumberClick;

	return(
		<div className="NumbersPanel" >
			<div>
				<Button label="7" onClick={() => {onNumberClick('7')}} />
				<Button label="8" onClick={() => {onNumberClick('8')}} />
				<Button label="9" onClick={() => {onNumberClick('9')}} />
			</div>
			<div>
				<Button label="4" onClick={() => {onNumberClick('4')}} />
				<Button label="5" onClick={() => {onNumberClick('5')}} />
				<Button label="6" onClick={() => {onNumberClick('6')}} />
			</div>
			<div>
				<Button label="1" onClick={() => {onNumberClick('1')}} />
				<Button label="2" onClick={() => {onNumberClick('2')}} />
				<Button label="3" onClick={() => {onNumberClick('3')}} />
			</div>
			<div>
				<Button label="0" onClick={() => {onNumberClick('0')}} />
				<Button label="=" onClick={() => {}} />
			</div>
		</div>
	)
};


export default NumbersPanel;
