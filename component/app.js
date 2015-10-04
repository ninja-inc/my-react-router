'use strict';
var React = require('react'),
    {Link, RouteHandler} = require('react-router')
;

var App = React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="/">React server-side rendering sample</Link></h1>
        
          <Link to="/top" key='top'>top</Link>
          <Link to="/users" key='users'>users</Link>
        
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = App;
