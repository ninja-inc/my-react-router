var React = require('react'),
    {Router, Route, DefaultRoute} = require('react-router'),
    //{createHistory, useBasename} = require('history'),
    App = require('./component/app'),
    Top = require('./component/top'),
    Users = require('./component/users'),
    User = require('./component/user')
;

//var history = createBrowserHistory();
console.log("out of routes.js");
module.exports = function() {
  console.log("routes.js");
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="/top" component={Top} />
        <Route path="/users" component={Users}>
          <Route path="/user" component={User}/>
        </Route>
      </Route>
    </Router>
  );
};

/*
module.exports = function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="top" handler={Top} />
      <Route name="users" handler={Users}>
        <Route name="user" handler={User}/>
      </Route>
    </Route>
  );
};
*/