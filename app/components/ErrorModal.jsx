var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },
  propTypes:{
    title: React.PropTypes.string,
    message:React.PropTypes.string.isRequired // means this is always require, not optional
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4> {title} </h4>
        <p> {message} </p>
        <p>
          <button className="button hollow" data-close="">
            Okay {/* they they click it will automatically close */}
          </button>
        </p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal); // returns the DOM node where the component lives


    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open(); // to show the modal
    // debugger;
  },
  render: function() {


    return (
      <div>
      </div>
    );
  }

});

module.exports = ErrorModal;
