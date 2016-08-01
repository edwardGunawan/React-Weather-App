var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <label>
//           <h4>It is {this.props.temp} degrees in {this.props.location}</h4>
//         </label>
//       </div>
//     );
//   }
// });

/* stateless functional component using arrow */
/* passing in destructor, by just having {temp, location} */
var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <label>
        <h4>It is {temp} degrees in {location}</h4>
      </label>
    </div>
  );
}

module.exports = WeatherMessage;
