'use strict';
var React = require('react'),
    ReactDOM = require('react-dom'),
    {Link, RouteHandler} = require('react-router')
;

var App = React.createClass({
  render() {
    return (
      <div>
        i am app<br/>
        <li><Link to="/top">top</Link></li>
        <li><Link to="/users">users</Link></li>
        <li><Link to="/dviderThumbnail">dviderThumbnail</Link></li>
        <li><Link to="/buttonApiCaller">buttonApiCaller</Link></li>
        <li><Link to="/tamTam">TamTam</Link></li>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;


        //<h1><Link to="/">React server-side rendering sample</Link></h1>
        
          //<Link to="/top">top</Link>
          //<Link to="/users">users</Link>
        //{this.props.children}
        
        //<RouteHandler {...this.props} />