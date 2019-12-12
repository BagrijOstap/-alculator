import React, {Component} from 'react';
import './CalcContainer.css';
import Screen from '.././Screen/Screen'
import InputsContainer from '.././InputsContainer/InputsContainer'

class CalcContainer extends Component {

	state = {
		number1: '0',
		number2: '0',
		operation: '',
	};

	onNumberClick = (number) => {
		const currentNumber = this.state.operation === '' ? this.state.number1 : this.state.number2;
		if(number === '.' && currentNumber.includes('.')) {
			return;
		}
		const updatetNumber = currentNumber !== '0' ? currentNumber.concat(number) : number;
		this.setState(this.state.operation === '' ? { number1: updatetNumber } : { number2: updatetNumber });
	};

	setOperation = (operation) => {
		this.setState({ operation: operation });
	};

	onClear = (clear) => {
		this.setState({
			number1: '0',
			number2: '0',
			operation: '',
		})
	};

	stringToNumber = (stringValue) => {
		if (stringValue === '.'){
			return 0;
		} return parseFloat(stringValue);
	};

	onEqual = () => {
		const number1 = this.stringToNumber(this.state.number1);
		const number2 = this.stringToNumber(this.state.number2);
		const operation = this.state.operation;
		let result;

		if (operation === '/' && number2 === '0'){
			alert('Неможливо поділити на 0')
		} else if (operation !== '') {
				switch (operation) {
					case '+': {
						result = number1 + number2;
						break;
					}
					case '-': {
						result = number1 - number2;
						break;
					}
					case '*': {
						result = number1 * number2;
						break;
					}
					case '/': {
						result = number1 / number2;
						break;
					}
					default: break;
				}

				this.setState({number1: result.toString(), number2: '0', operation: ''});
		};

	};

	render(){

		return(
			<div className="CalcContainer">
				<Screen
					text={this.state.operation === '' ? this.state.number1 : this.state.number2}
				/>
				<InputsContainer
					onNumberClick={this.onNumberClick}
					setOperation={this.setOperation}
					onClear={this.onClear}
					onEqual={this.onEqual}
				/>
			</div>
		)
	};

};


export default CalcContainer;
