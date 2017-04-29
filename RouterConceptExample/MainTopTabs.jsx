var React = require('react');
var Nav= require('Nav');
var PropTypes = React.PropTypes;


var MainTopTabs = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  handleTabClick: function(tabClick){
    this.setState(tabClick);
  },
  render: function() {
    return (
      <div>
        <Nav onTabClick = {this.handleTabClick}/>
        <h2> Main Component </h2>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = MainTopTabs;
