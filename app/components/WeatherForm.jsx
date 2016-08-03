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
      <div>
        <form onSubmit={this.onFormSubmit}>
            <input type= "search" ref="location" placeholder="Search Weather by City"/>
            <button className="button expanded hollow">Get Weather</button>
        </form>
    </div>
    );
  }
});


module.exports = WeatherForm;
