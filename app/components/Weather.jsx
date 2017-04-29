var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function(){
      return {
      isLoading: false,
    };
  },
  handleSearch: function(location){
    var that = this;

    /* so after finish you have to clear the URL string and all the location and temp
    to prevent data from lingering around */
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp:undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
         location:location,
         temp: temp,
         isLoading: false
       });
    }, function(e){
      /* at this point no data: set isLoading back to false
      set other state to null to prevent fallback */
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function(){ // this method fires once the component has successfully mounted into the browser it is like the initial state
    // the location.props comes from React Router and gets injected into our components because we configure them with React Router.
    var location = this.props.location.query.location; // get the query string, the last location can be changed based on like name or anything
    // get access to various property of props, and one of them is location
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/"; // this is set it to the root of the file so the location get deleted
    }
  },
  /* when already have a weather component render, and update the URL, the component
  doesn't know how to update itself, so we need a way to capture changes to props
  A parent can always update a child's props */
  componentWillReceiveProps : function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash="#/";
    }
  }, // get call the component props gets updated, its a function
  render: function(){

    var {temp,location,isLoading,errorMessage} =this.state;

    /* because renderMessage function is a regular function but not an arrow function,
    so 'this' will not bind with the parent function, if you use arrow function,
    this keyword will bind with the parent function (render) so it can find it,
    in this case the this keyword inside the renderMessage will be undefined and it will
    return undefined */
    function renderMessage () {
      /* the thing about isLoading is when the API is searching for the weather,
       it will render said that if the user is fetching the weather or not */
      if(isLoading){
        return <h3 className="text-center">Fetching Weather ....</h3>
      }else if(location && temp){
        return <WeatherMessage temp={temp} location={location} />
      }
    }
    /* set the error modal */
    function renderError(){
      // debugger;
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }
    /* renderMessage(): conditionally render component inside of our state */
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});


module.exports = Weather;
