'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Input, Button} from 'react-bootstrap'
import _ from 'underscore'
import $ from 'jquery'
import Tesseract from 'tesseract.js'

export default class TamTam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.test = this.test.bind(this);
	}
	render() {

		return (
			<div>
				<img src="http://localhost:3000/img.jpg"
						ref="imgtesttest" />
				<button 
					onClick={this.test}
					value="click me!" />
			</div>
		);
	}
	test() {
		let testImgObj = React.findDOMNode(this.refs.imgtesttest)
		console.log(testImgObj)
		Tesseract.recognize(testImgObj, {
			lang: 'jpn'
		})
        	.progress(function  (p) { console.log('progress', p)    })
        	.then(function (result) { console.log('result', result) });		
	}
	
	componentDidMount() {
		// componentWillMount does not work due to $.ajax
		this.setAttendanceList();
	}
	setAttendanceList() {
		/*
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
		*/
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
}
TamTam.defaultProps = { }