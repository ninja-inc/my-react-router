var React = require('react'),
    {Route, DefaultRoute} = require('react-router'),
    App = require('./component/app'),
    Top = require('./component/top'),
    Users = require('./component/users'),
    User = require('./component/user')
;

module.exports = function() {
  return (
    <Route name="app" path="/" handler={App}>
      <Route name="top" handler={Top} />
      <Route name="users" handler={Users}>
        <Route name="user" handler={User}/>
      </Route>
      <DefaultRoute handler={Top} />
    </Route>
  );
};
