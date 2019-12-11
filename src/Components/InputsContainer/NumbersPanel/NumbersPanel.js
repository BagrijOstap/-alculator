import React from 'react';
import './NumbersPanel';
import Button from '../Button/Button'

const NumbersPanel = () => {
	return(
		<div className="NumbersPanel" >
			<div>
				<Button label="7" onClick={() => {console.log(1)}} />
				<Button label="8" onClick={() => {console.log(1)}} />
				<Button label="9" onClick={() => {console.log(1)}} />
			</div>
			<div>
				<Button label="4" onClick={() => {console.log(1)}} />
				<Button label="5" onClick={() => {console.log(1)}} />
				<Button label="6" onClick={() => {console.log(1)}} />
			</div>
			<div>
				<Button label="1" onClick={() => {console.log(1)}} />
				<Button label="2" onClick={() => {console.log(1)}} />
				<Button label="3" onClick={() => {console.log(1)}} />
			</div>
			<div>
				<Button label="0" onClick={() => {console.log(1)}} />
				<Button label="." onClick={() => {console.log(1)}} />
				<Button label="=" onClick={() => {console.log(1)}} />
			</div>
		</div>
	)
};


export default NumbersPanel;
