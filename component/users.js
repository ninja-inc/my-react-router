'use strict';
var React = require('react'),
    ReactDOM = require('react-dom'),
	{Link, RouteHandler} = require('react-router')
;

var Users = React.createClass({
  //mixins: [UserMixin],
  render() {
    return (
      <div>
        i am user
      </div>
    );
  }
});

module.exports = Users;
