'use strict';
var React = require('react'),
    {Link, RouteHandler} = require('react-router')
;

var App = React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="app">React server-side rendering sample</Link></h1>
        <div>
          <Link to="top" key='top'><div>top</div></Link>
          <Link to="users" key='users'><div>users</div></Link>
        </div>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = App;
