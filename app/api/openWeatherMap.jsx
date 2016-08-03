// this is to take on the third party library for the API
var axios = require('axios');

// naming convention is to use the upper cases and the underscore to separate the word
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=df2dc41c94cd9fb5e46dad8d8282e5e9&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location); // change it to encoded URI
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // you can inject a variable inside of the string, everything inside of the curly braces is executed as a regular JS expression as like a URL
    // debugger;

    // make the request: takes the URL goes off and fetches it and bring you back the result
    return axios.get(requestURL).then(function(res){
      // debugger;
      /* store the weather from openWeather map API */
      /* properly catch all errors */
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    },function(res){ // for the error one
      throw new Error(res.data.message);
    });
  }
}
