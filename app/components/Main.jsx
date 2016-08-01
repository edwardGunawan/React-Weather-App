var React = require('react');
var Nav = require('Nav');

/* its because we want to change or switch inside the
main component to have example, about and get weather,
so we will put it into the router and we will put
it into the Router and let the user managed on
how it will get routed */
// var Main = React.createClass({
//   render:function(){
//     return (
//       <div>
//         <Nav />
//         <h2>Main Component</h2>
//         {this.props.children} {/* this will render everything that is inside the main tag in app.jsx */}
//       </div>
//     );
//   }
// });

/* refactor it again using stateless functional component, arrow key */
var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children} {/* because props is already been passed in */}
    </div>
  );
}

module.exports = Main;
