'use strict';
var React = require('react'),
	ReactDOM = require('react-dom'),
    //Router = require('react-router'),

    {Router, Route, DefaultRoute} = require('react-router'),
    App = require('./component/app'),
    Top = require('./component/top'),
    Users = require('./component/users'),

    //routes = require('./routes')(),
    routes = require('./routes'),
    createBrowserHistory = require('history/lib/createBrowserHistory')
;

var initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

import DividerThumbnail from './component/dividerThumbnail'
import ButtonApiCaller from './component/buttonApiCaller'

//ReactDOM.render(<Router history={createHistory()}>{routes}</Router>, document.getElementById("app"));
//ReactDOM.render(<Router routes={routes}/>, document.getElementById("app"));

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
        	<Route path="top" component={Top} />
        	<Route path="users" component={Users} />
            <Route path="dviderThumbnail" component={DividerThumbnail} />
            <Route path="buttonApiCaller" component={ButtonApiCaller} />
      	</Route>
    </Router>
, document.getElementById("app"));


/*
Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler params={{users: initialData}} />, document.getElementById("app"));
});
*/