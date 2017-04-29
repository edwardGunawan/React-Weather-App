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
/* small will affect medium and large, so if small is centered, which is small-centered,
then medium and large will also be centered, if you want to let small to be centered, then
just take small-centered */
var Main = (props) => {
  return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered"> {/* it will centered our column in our content on every width */}
            {props.children} {/* because props is already been passed in */}
          </div>
        </div>
      </div>
  );
}

module.exports = Main;
