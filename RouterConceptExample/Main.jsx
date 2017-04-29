var React = require('react');
// var DMD = require('DMD');
// var LS = require('LS');
var MainPrintFrame = require('MainPrintFrame');
var MainTopTabs = require('MainTopTabs');
var {Link, IndexLink} = require('react-router');

var Main = React.createClass({
  componentDidUpdate: function() {
    componentHandler.upgradeDom();
  },
  componentDidMount: function() {
    componentHandler.upgradeDom();
  },
  render: function(){
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* title */}
            <span className="mdl-layout-title">Main Component</span>
            {/*} Add spacer to add some space, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/*} Navigation. We hide it in small screens. */}
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>

        <main className="mdl-layout_content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--2-col">{/* PRINT BUTTONS */}</div>
              <div className="mdl-cell mdl-cell--4-col"><MainPrintFrame/></div>
              <div className="mdl-cell mdl-cell--6-col">
                {this.props.children}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
});

module.exports = Main;
