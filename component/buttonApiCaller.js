'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Input} from 'react-bootstrap'
import _ from 'underscore'

export default class ButtonApiCaller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultLargeIndex: "0",
			isDisabledMiddle: true,
			middleOptions: [{name: "chose above"}]
		}
		this.setMiddleOptions = this.setMiddleOptions.bind(this);
	}
	render() {
		let optionItems = this.props.optionItems;

		return (
			<form>
			    <Input type="select"
			    	label="SelectLarge"
			    	placeholder="select"
			    	onChange={this.setMiddleOptions}
			    	value={this.state.defaultLargeIndex}>
			    	  <option value="0" disabled>chose one</option>
			    	  {this.renderOptions(optionItems)}
			    </Input>
			    <Input type="select"
			    	label="SelectMiddle"
			    	placeholder="select"
			    	disabled={this.state.isDisabledMiddle}>
			      {this.renderOptions(this.state.middleOptions)}
			    </Input>
			</form>
		);
	}
	renderOptions(optionElements) {
		return optionElements.map(optionElement => {
			return (
				<option value={optionElement.name} key={optionElement.name}>
					{optionElement.name}
				</option>
			);
		});
	}
	setMiddleOptions(e) {
		console.log(e.target.options.length);
		let selectedValueName = _.chain(e.target.options)
									.filter(e => e.selected)
									.map(e => e.value)
									.value();
		console.log(selectedValueName);
		let middleOptions = _.find(this.props.optionItems, optionItem => optionItem.name == selectedValueName);
		console.log(middleOptions);
		console.log(middleOptions.middleNames);
		this.setState({middleOptions: middleOptions.middleNames});
		this.setState({isDisabledMiddle: false, defaultLargeIndex: selectedValueName});
	}
}
ButtonApiCaller.defaultProps = {
	optionItems: [
		{
			name: "A",
			middleNames: [
				{name: "a"},
				{name: "b"}
			]
		},
		{
			name: "B",
			middleNames: [
				{name: "c"},
				{name: "d"}
			]
		}
	]
}