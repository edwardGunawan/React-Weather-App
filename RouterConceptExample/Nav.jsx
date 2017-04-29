var React = require('react');
var {Link, IndexLink, hash} = require('react-router');


var Nav = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  handleClick: function(e){
    this.props.onTabClick({tabClick: e.target.value});
  },
  render: function() {
    return (
      <main className="mdl-layout__content">
        <div className="mdl-tabs mdl-js-tabs">
           <div className="mdl-tabs__tab-bar">
              <IndexLink to="/" onClick={this.handleClick} className="mdl-tabs__tab is-active">Tab 1</IndexLink>
              <Link to="/PendingJobs" onClick={this.handleClick} className="mdl-tabs__tab">Tab 2</Link>
              <Link to="/PrintHistory" onClick={this.handleClick} className="mdl-tabs__tab">Tab 3</Link>
           </div>
        </div>
      </main>
    );
  }
});

module.exports = Nav;

// <main classＮame="mdl-layout__content">
//  <div classＮame="mdl-tabs mdl-js-tabs">
//     <div className="madl-tabs__tab-bar">
//       <li><IndexLink to="/" activeClassName="mdl-tabs__tab is-active" activeStyle={{fontWeight: 'bold'}}> Control </IndexLink></li>
//       <li><Link to="/PendingJobs" activeClassName="active mdl-tabs__tab" activeStyle={{fontWeight: 'bold'}}> Pending Job </Link></li>
//       <li><Link to="/PrintHistory" activeClassName="active mdl-tabs__tab" activeStyle={{fontWeight: 'bold'}}> Print History </Link></li>
//     </div>
//   </div>
// </main>
