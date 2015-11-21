'use strict';
var React = require('react'),
    ReactDOM = require('react-dom'),
  	{Link, RouteHandler} = require('react-router');

import SearchButton from './searchButton'
import {ButtonToolbar} from 'react-bootstrap'

var Users = React.createClass({
  //mixins: [UserMixin],
  render() {
    return (
      <ButtonToolbar>
        <SearchButton name="MyName"/>
      </ButtonToolbar>
    );
  }
});

module.exports = Users;
