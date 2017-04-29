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
  /* the reason: after react adding the component to the dom, foundation
  is removing them. It doens't work well with react because react need to
  maintain the component state and the dom
  Solution: we put everything on component did mount because it is the one that we
  are able to make any changes with the actually DOM elements */
  /*The problem is that React needs to manage the components DOM. If you manually start changing the DOM,
  React is not going to be able to re-render or update the component. We fix this 
  by making sure to update the component after it's rendered (we also clean it up).*/
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
    var $modal = $(ReactDOMServer.renderToString(modalMarkup)); // pass the jSX code
    $(ReactDOM.findDOMNode(this)).html($modal); // returns the DOM node where the component lives, and pass in the jQuery


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
