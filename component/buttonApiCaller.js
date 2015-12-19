'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Input, Button} from 'react-bootstrap'
import _ from 'underscore'
import $ from 'jquery'

export default class ButtonApiCaller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultLargeIndex: "0",
			isDisabledMiddle: true,
			middleOptions: [{name: "chose above"}]
		}
		this.setMiddleOptions = this.setMiddleOptions.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}
	render() {
		let optionItems = this.props.optionItems;

		return (
			<form>
			    <Input type="select"
			    	label="SelectLarge"
			    	ref="SelectLarge"
			    	placeholder="select"
			    	onChange={this.setMiddleOptions}
			    	value={this.state.defaultLargeIndex}>
			    	  <option value="0" disabled>chose one</option>
			    	  {this.renderOptions(optionItems)}
			    </Input>
			    <Input type="select"
			    	label="SelectMiddle"
			    	ref="SelectMiddle"
			    	placeholder="select"
			    	disabled={this.state.isDisabledMiddle}>
			      {this.renderOptions(this.state.middleOptions)}
			    </Input>
			    <Button onClick={this.submitForm}>submit</Button>
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
	submitForm(value) {
		console.log(value)
		console.log(value.target.form.elements[0].options);
		let hoge1 = _.find(value.target.form.elements[0].options, optionItem => optionItem.selected).value;
		//let hoge1 = _.chain(value.target.form.elements[0].options)
		//							.filter(e => e.selected)
		//							.map(e => e.value)
		//							.value();
		//let hoge1 = this.refs.SelectLarge.props.value[0];
		let hoge2 = _.find(value.target.form.elements[1].options, optionItem => optionItem.selected).value;

		console.log(hoge1);
		console.log(hoge2);

		$.ajax({
			url: "http://localhost:8080/tam2/attendance",
			dataType: 'jsonp',
			type: "GET",
			success: res => {
				console.log(JSON.stringify(res));
			}
		});
	}
	setMiddleOptions(e) {
		//console.log(e.target.options.length);
		//let selectedValueName = _.chain(e.target.options)
		//							.filter(e => e.selected)
		//							.map(e => e.value)
		//							.value();
		let selectedValueName = _.find(e.target.options, optionItem => optionItem.selected).value;
		//console.log(selectedValueName);
		let middleOptions = _.find(this.props.optionItems, optionItem => optionItem.name == selectedValueName);
		//console.log(middleOptions);
		//console.log(middleOptions.middleNames);
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