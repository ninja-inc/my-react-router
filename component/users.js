'use strict';
var React = require('react'),
	//UserMixin = require('../mixin/user-mixin'),
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
