'use strict';
var React = require('react'),
    ReactDOM = require('react-dom'),
  	{Link, RouteHandler} = require('react-router');

import SearchButton from './searchButton'

var Users = React.createClass({
  //mixins: [UserMixin],
  render() {
    return (
      <SearchButton/>
    );
  }
});

module.exports = Users;
