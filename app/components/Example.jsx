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
    <div>
      <h3> Examples </h3>
      <p> Welcome to the examples page! </p>

    </div>

  );
}



module.exports = Example;
