import React from 'react';
import './NumbersPanel';
import Button from '../Button/Button'

const NumbersPanel = () => {
	return(
		<div className="NumbersPanel" >
			<Button label="1" onClick={() => {console.log(1)}} />
			<Button label="1" onClick={() => {console.log(1)}} />
			<Button label="1" onClick={() => {console.log(1)}} />
			<Button label="1" onClick={() => {console.log(1)}} />
		</div>
	)
};


export default NumbersPanel;
