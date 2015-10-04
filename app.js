
var express     = require('express'),
    app         = express(),
    fs          = require('fs'),
    Handlebars  = require('handlebars'),
    React       = require('react'),
    //Router      = require('react-router').Router,
    path        = require('path'),
    reactAsync  = require('react-async'),

    createLocation = require('history/lib/createLocation'),
    { RoutingContext, match }= require('react-router')

;



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
  var location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    
    if (redirectLocation) {
      console.log("redirect");
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    }
    else if (error){
      console.log("error");
      res.send(500, error.message)
    }
    else if (renderProps == null){
      console.log("404");
      res.send(404, 'Not found')
    }
    else {
//var element = React.createElement(RoutingContext);
console.log(renderProps);
console.log(JSON.stringify(renderProps));
console.log("element:"+React.renderToString(<RoutingContext {...renderProps}/>));
console.log("done");
      res.send(template({
        initialData: JSON.stringify(data),
        markup: React.renderToString(<RoutingContext {...renderProps}/>)
        //markup: React.renderToString(React.renderToString(element))
      }));
    }
  })
}
)


/*
app.use(function(req, res) {

    var element = React.createElement(Router, null, routes);
    console.log("element:"+JSON.stringify(element));

    var hoge = React.renderToString(element);
    console.log("hoge:"+JSON.stringify(hoge));

    res.send(template({
      initialData: JSON.stringify(data),
      markup: hoge
    }));
});
*/
  /*
  Router.run(routes, req.path, function(Handler) {
    res.send(template({
      initialData: JSON.stringify(data),
      markup: React.renderToString(React.createElement(Handler, {params: {users: data}}))
    }));
  });
  */


module.exports = app;
