'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Input, Button} from 'react-bootstrap'
import _ from 'underscore'
import $ from 'jquery'
import AttendanceList from './AttendanceList'

export default class ButtonApiCaller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultStatusIndex: "0",
			isDisabledReason: true,
			reasons: [{name: "Chose Reason"}],
			attendances: [
				{name: "hoge"}
			],
			isLoading: false
		}
		this.setReasons = this.setReasons.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.setAttendanceList = this.setAttendanceList.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	render() {
		let statuses = this.props.statuses;

		return (
			<form>
				<Input type="text" label="Name" placeholder="Enter Your Name" />
			    <Input type="select"
			    	label="Status"
			    	ref="SelectStatus"
			    	placeholder="select"
			    	onChange={this.setReasons}
			    	value={this.state.defaultStatusIndex}>
			    	  <option value="0" disabled>Chose Status</option>
			    	  {this.renderOptions(statuses)}
			    </Input>
			    <Input type="select"
			    	label="Reason"
			    	ref="SelectReason"
			    	placeholder="select"
			    	disabled={this.state.isDisabledReason}>
			      {this.renderOptions(this.state.reasons)}
			    </Input>
			    <Button onClick={this.submitForm}>submit</Button>

			    <AttendanceList attendances={this.state.attendances} isLoading={this.state.isLoading} />
			</form>
		);
	}
	componentDidMount() {
		// componentWillMount does not work due to $.ajax
		this.setAttendanceList();
	}
	setAttendanceList() {
		this.setState({isLoading: true});
		$.ajax({
			headers: { 
	        	'Accept': 'application/json',
	        	'Content-Type': 'application/json' 
    		},
			type: 'GET',
			url: 'http://localhost:8080/tam2/attendance',
			dataType: 'jsonp',
			success: res => {
				console.log(JSON.stringify(res));
				this.setState({attendances: res});
				this.setState({isLoading: false});
			}
		});
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

		let inputedName = value.target.form.elements[0].value;
		let selectedStatusName = _.find(value.target.form.elements[1].options, optionItem => optionItem.selected).value;
		//let hoge1 = _.chain(value.target.form.elements[0].options)
		//							.filter(e => e.selected)
		//							.map(e => e.value)
		//							.value();
		//let hoge1 = this.refs.SelectStatus.props.value[0];
		let selectedReasonName = _.find(value.target.form.elements[2].options, optionItem => optionItem.selected).value;

		console.log(inputedName);
		console.log(selectedStatusName);
		console.log(selectedReasonName);

		this.setState({isLoading: true});
		$.ajax({
			headers: { 
	        	'Accept': 'application/json',
	        	'Content-Type': 'application/json' 
    		},
			type: 'POST',
			url: 'http://localhost:8080/tam2/attendance',
			dataType: 'json',
			data: JSON.stringify({
				name: inputedName,
				status: selectedStatusName,
				reason: selectedReasonName
			}),
			success: res => {
				console.log(JSON.stringify(res));
				this.setState({attendances: res});
				this.setState({isLoading: false});
			}
		});
	}
	setReasons(e) {
		//console.log(e.target.options.length);
		//let selectedValueName = _.chain(e.target.options)
		//							.filter(e => e.selected)
		//							.map(e => e.value)
		//							.value();
		let selectedStatusName = _.find(e.target.options, optionItem => optionItem.selected).value;
		let reasons = _.find(this.props.statuses, optionItem => optionItem.name == selectedStatusName);

		this.setState({reasons: reasons.reasons});
		this.setState({isDisabledReason: false, defaultStatusIndex: selectedStatusName});
	}
}
ButtonApiCaller.defaultProps = {
	statuses: [
		{
			name: "Late Arrival",
			reasons: [
				{name: "Bad Health"},
				{name: "Train Delay"}
			]
		},
		{
			name: "Business Trip",
			reasons: [
				{name: "Outside Training"},
				{name: "Maintenance"}
			]
		}
	]
}