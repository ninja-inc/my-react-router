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
        <Button bsStyle="default" bsSize="xsmall" active={isActive1} onClick={this.clickButton1} onfocus="this.blur();">KAWASAKI</Button>
        <Button bsStyle="default" bsSize="xsmall" active={isActive2} onClick={this.clickButton2} onfocus="this.blur();">HONDA</Button>
        <Button bsStyle="default" bsSize="xsmall" active={isActive3} onClick={this.clickButton3} onfocus="this.blur();">ヤマハ</Button>
      </ButtonToolbar>
    );
  },

  clickButton1() {
    this.setState({isActive1 : !this.state.isActive1})
  },

  clickButton2() {
    this.setState({isActive2 : !this.state.isActive2})
  },

  clickButton3() {
    this.setState({isActive3 : !this.state.isActive3})
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