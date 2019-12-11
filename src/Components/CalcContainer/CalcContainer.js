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
		if (this.state.operation === '') {
			const currentNumber = this.state.number1;
			const updatetNumber = currentNumber !== '0' ? currentNumber.concat(number) : number;
			this.setState({number1: updatetNumber});
		} else {
			const currentNumber = this.state.number2;
			const updatetNumber = currentNumber !== '0' ? currentNumber.concat(number) : number;
			this.setState({number2: updatetNumber});
		}
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

	render(){
		return(
			<div className="CalcContainer">
				<Screen text={this.state.operation === '' ? this.state.number1 : this.state.number2}/>
				<InputsContainer
					onNumberClick={this.onNumberClick}
					setOperation={this.setOperation}
					onClear={this.onClear}
				/>
			</div>
		)
	};

};


export default CalcContainer;
