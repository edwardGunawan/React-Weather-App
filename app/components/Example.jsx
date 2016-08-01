var React = require('react');

// var Example = React.createClass({
//   render: function(){
//     return(
//       <h3> Example Components</h3>
//     );
//   }
// });

/* refactor to stateless functional component */
var Example = (props) => {
  return (
    <h3> Example Components</h3>
  );
}



module.exports = Example;
