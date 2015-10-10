var React = require('react'),
    {Router, Route, DefaultRoute} = require('react-router'),
    //{createHistory, useBasename} = require('history'),
    App = require('./component/app'),
    Top = require('./component/top'),
    Users = require('./component/users'),
    User = require('./component/user')
;

//var history = createBrowserHistory();
console.log("AAA:error start?");
console.log("User:"+React.renderToString(React.createElement(User)));
console.log("BBB:error start?");
console.log("User:"+React.renderToString(<User />));


console.log("CCC:error start?");
console.log("App:"+React.renderToString(React.createElement(App)));
console.log("DDD:error start?");
console.log("App:"+React.renderToString(<App />));
console.log("out of routes.js");


console.log("out of routes.js");
module.exports = function() {
  console.log("routes.js");
  return (
      <Route path="/" component={App}>
        <Route path="top" component={Top} />
        <Route path="users" component={Users} />
      </Route>
  );
};

/*
          <Route path="/user" component={User}/>
        </Route>
*/

//    <Router>
//</Router>

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