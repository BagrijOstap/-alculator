import React, {Component} from 'react';
import './CalcContainer.css';
import Screen from '.././Screen/Screen'
import InputsContainer from '.././InputsContainer/InputsContainer'

class CalcContainer extends Component {

	state = {
		number1: "0"
	};

	onNumberClick = (number) => {
		const currentNumber = this.state.number1;
		const updatetNumber = currentNumber !== '0' ? currentNumber.concat(number) : number ;
		this.setState({number1: updatetNumber});
	};

	render(){
		return(
			<div className="CalcContainer">
				<Screen text={this.state.number1}/>
				<InputsContainer onNumberClick={this.onNumberClick}/>
			</div>
		)
	};

};


export default CalcContainer;
