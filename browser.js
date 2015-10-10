'use strict';
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes')(),
    createBrowserHistory = require('history/lib/createBrowserHistory')
;

var initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
var history = createBrowserHistory();

React.render(<Router history={history}>{routes}</Router>, document.getElementById("app"));

/*
Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler params={{users: initialData}} />, document.getElementById("app"));
});
*/