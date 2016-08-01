var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3> About Components</h3>
//     );
//   }
// });

// var About = function(props) {
//   return (
//     your return statement
//   )
// }

/* create this component stateless function, to refactor */
var About = (props) => {
  return (
    <div>
      <h3> About Components</h3>
      <p> Welcome to the about page. </p>
    </div>
  );
}



module.exports = About;
