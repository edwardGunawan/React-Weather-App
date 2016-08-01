var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink> {/* to props is where we specify where the path is going to */}
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About</Link>
//         <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example</Link>
//       </div>
//     );
//   }
// });

/* refactoring again using the stateless functional component */
var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink> {/* to props is where we specify where the path is going to */}
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example</Link>
    </div>
  );
}

/* without the link tag we are able to use a tag href to #/about and Go to About,
we are able to custom style and classes to the element to the link that is for the current page,
if I am on an about page customize the style of the about link letting them know what page
they are on, it takes up the link with the visible stage it is going to let the user know
what page is the user in right now, like if you are still in weather, then it will
be bold*/

module.exports = Nav;
