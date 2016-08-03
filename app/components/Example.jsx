var React = require('react');
var {Link} = require('react-router');

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
      <h1 className="text-center page-title"> Examples </h1> {/* centered the text in our h1 component */}
      <p> Here are a few example to try out: </p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia"> Philadelphia, PA </Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>

    </div>

  );
}



module.exports = Example;
