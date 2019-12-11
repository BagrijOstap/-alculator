import React, {Component} from 'react';
import './CalcContainer.css';
import Screen from '.././Screen/Screen'
import InputsContainer from '.././InputsContainer/InputsContainer'

class CalcContainer extends Component {

	render(){
		return(
			<div className="CalcContainer">
				<Screen/>
				<InputsContainer/>
			</div>
		)
	};

};


export default CalcContainer;
