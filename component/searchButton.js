'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'

export default class SearchButton extends React.Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		}
		this.clickButton = this.clickButton.bind(this);
	}
	render() {
		return (
			<Button ref={this.props.name}
					bsStyle="default"
					bsSize="xsmall"
					active={this.state.isActive}
					onClick={this.clickButton}>
						{this.props.name}
			</Button>
		);
	}
	clickButton() {
		this.setState({isActive: !this.state.isActive});
		ReactDOM.findDOMNode(this).blur();
	}
}
SearchButton.propTypes = {
	name: React.PropTypes.string.isRequired
}
