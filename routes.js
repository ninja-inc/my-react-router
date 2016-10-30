var React = require('react'),
    ReactDOM = require('react-dom'),
    {Router, Route, DefaultRoute} = require('react-router'),
    App = require('./component/app'),
    Top = require('./component/top'),
    Users = require('./component/users')
;

import DividerThumbnail from './component/dividerThumbnail'
import ButtonApiCaller from './component/buttonApiCaller'
import TamTam from './component/tamTam'


module.exports = function() {
  console.log("routes.js");
  return (
      <Route path="/" component={App}>
        <Route path="top" component={Top} />
        <Route path="users" component={Users} />
        <Route path="dviderThumbnail" component={DividerThumbnail} />
        <Route path="buttonApiCaller" component={ButtonApiCaller} />
        <Route path="tamTam" component={TamTam} />
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