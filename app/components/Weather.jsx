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

    this.setState({
      isLoading: true,
      errorMessage: undefined
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
