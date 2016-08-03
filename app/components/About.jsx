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
      <h1 className="text-center page-title"> About </h1>
      <p>
        This app is a weather app in which user are able to see any weather
        in any location.
       </p>
       <p>
         Here are some of the tools I use:
       </p>
       <ul>
         <li>
           <a href="https://facebook.github.io/react/"> React</a> - This was
             the javascript framework used.
         </li>
         <li>
           <a href="http://openweathermap.org">Open weather map</a> - I used
             open weather map to search for weather in the data.
         </li>

       </ul>

    </div>
  );
}



module.exports = About;
