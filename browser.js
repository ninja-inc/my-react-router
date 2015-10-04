'use strict';
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes')()
    //BrowserHistory = require('react-router/lib/BrowserHistory')
;

var initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

React.render(<Router /*history={BrowserHistory}*/>{routes}</Router>, el)

/*
Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler params={{users: initialData}} />, document.getElementById("app"));
});
*/