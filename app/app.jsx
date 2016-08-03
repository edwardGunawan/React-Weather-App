var React = require('react');
var ReactDOM = require('react-dom');
// same things as Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var obj = {
//   name: 'Andrew'
// }
/* creates a new variable called name and set the obj.name is equal to */
// var {name} = obj;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// load foundation css! is the css loader
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
// add css and we use the css and style loader to load in our style
require('style!css!sass!applicationStyles')


ReactDOM.render(
  /* Router set up and set a args of history to hashHistory
   the path ="/" it will be our root application, component is the main
   component, so if you change it to Weather, then when loaded it will
   show a weather components
   IndexRoute : it is like a default route, if no other route is matched then it will matched to index Route.
   Only takes one args or props: component

   Route About: main is always going to get rendered, if it is /about then
   it will go to about, then if it is nothing then it will go to Main*/
   /* tells the react we want to use the # sign and the path in order to maintain the route for our path */
   /* nested Route is for main route still show up but either its about example or weather */
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="/example" component={Example}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
