var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    Handlebars  = require('handlebars'),
    React       = require('react'),
    Router      = require('react-router').default,
    path        = require('path')
;

require('node-jsx').install({ harmony: true });

var data = {
  users: [
    { id : "10000", name: 'Bob', age: 19 },
    { id : "10001", name: 'Taro', age: 24 },
    { id : "10002", name: 'Nick', age: 22 },
    { id : "10003", name: 'Smith', age: 17 },
    { id : "10004", name: 'Vassy', age: 26 }
  ]
};

app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes')();
var template = Handlebars.compile(fs.readFileSync('./index.hbs').toString());

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    res.send(template({
      initialData: JSON.stringify(data),
      markup: React.renderToString(React.createElement(Handler, {params: {users: data}}))
    }));
  });
});



module.exports = app;
