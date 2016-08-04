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
var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    if(location.length > 0){
      this.refs.search.value = "";
      window.location.hash='#/?location='+encodedLocation; // by switching pages
    }
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"> React Weather App </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather</IndexLink> {/* to props is where we specify where the path is going to */}
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search Weather by City" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

/* without the link tag we are able to use a tag href to #/about and Go to About,
we are able to custom style and classes to the element to the link that is for the current page,
if I am on an about page customize the style of the about link letting them know what page
they are on, it takes up the link with the visible stage it is going to let the user know
what page is the user in right now, like if you are still in weather, then it will
be bold*/

module.exports = Nav;
