var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault(); // prevent the entire page from loading
    /* this refers to calling the tag input text, e is the event that is called
    like the DOM of the event onSubmit */
    var location = this.refs.location.value;

    if(location.length >0){
      this.refs.location.value = " ";
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type= "text" ref="location" placeholder="Enter city name"/>
        </div>
        <div>
          <input type="button" value="Get Weather"/>
        </div>
      </form>
    );
  }
});


module.exports = WeatherForm;
