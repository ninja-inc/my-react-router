'use strict';
var React = require('react'),
    ReactDOM = require('react-dom'),
    {Tabs, Tab} = require('react-bootstrap'),
    {ButtonToolbar, Button} = require('react-bootstrap')
;

var Top = React.createClass({
  getInitialState() {
    return {
      isActive1 : false,
      isActive2 : false,
      isActive3 : false
    };
  },
  
  render() {
    let isActive1 = this.state.isActive1;
    let isActive2 = this.state.isActive2;
    let isActive3 = this.state.isActive3;

    return (
      <ButtonToolbar>
        <Button ref="KAWASAKI" bsStyle="default" bsSize="xsmall" active={isActive1} onClick={this.clickButton1}>KAWASAKI</Button>
        <Button ref="HONDA" bsStyle="default" bsSize="xsmall" active={isActive2} onClick={this.clickButton2}>HONDA</Button>
        <Button ref="YAMAHA" bsStyle="default" bsSize="xsmall" active={isActive3} onClick={this.clickButton3}>YAMAHA</Button>
      </ButtonToolbar>
    );
  },

  clickButton1() {
    this.setState({isActive1 : !this.state.isActive1})
    ReactDOM.findDOMNode(this.refs.KAWASAKI).blur()
  },

  clickButton2() {
    this.setState({isActive2 : !this.state.isActive2})
    ReactDOM.findDOMNode(this.refs.HONDA).blur()
  },

  clickButton3() {
    this.setState({isActive3 : !this.state.isActive3})
    ReactDOM.findDOMNode(this.refs.YAMAHA).blur()
  }
});

module.exports = Top;

/*
      <Tabs defaultActiveKey={2}>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
*/