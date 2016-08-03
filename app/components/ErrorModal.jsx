var React = require('react');

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
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open(); // to show the modal
    // debugger;
  },
  render: function() {
    var {title, message} = this.props;

    return (
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
  }

});

module.exports = ErrorModal;
