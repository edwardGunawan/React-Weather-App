# React Weather Application
-----------------------

## Lesson for React Weather application app

---------------------------


the reason why we create an app is because to create all our raw file.
All of the app will be compile it into bundle.js and then shoot it to
the server, thats why we just need to put it into bundle.js
 * the Bundle.js is used by the browser inside of index.html so we keep
it into the public folder.

 * Axios:  make the request: takes the URL goes off and fetches it and bring you back the result
 * inside the getInitialState - isLoading: default: false, when someone trigger new location search is true, and after
finish search, it will set it again to false.
 * So in that case, when someone is using isLoading
is when the user type something and enter, when the API is looking for the information. It
will said like fetching the weather, or said in search, and once the API is finish
searching and get the data, the isLoading will be false again, it will get the data render in the weather.jsx.



when you do this.props.children, is when you want to passed in a tag inside another tag, so the tag
that is inside another tag is the children, and it will passed in as a children.
Ex:
var Main = React.createClass({
render: function() {
  return (
    <div className="main">
      <p>Main components custom jsx</p>
      {this.props.children}
    </div>
  )
}
});

var App = React.createClass({
render: function () {
  return (
    <div className="app">
      <p>Add a bunch of other custom components here</p>
    </div>
  );
}
});

ReactDOM.render(
<Main>
  <App/>
</Main>,
document.getElementById('container')
);

* stateless functional component: simple presentational component,
it only renders something to the screen, instead of calling react.createClass
if we only have the render method, we can use just a function
and a props that passes down as a return statement function.
* you can only refactor these component, because they Only
have render function, and only a presentational component.
* hashHistory: allows for changes into the URL without making a request to the server
for a new website. This allows us to create applications whose views get swapped
out on the client and configured via some router (react-router). No HTTP requests
are made when someone requests a new page using hash history.

-------------------------------------
## heroku:
* deploying your app framework.
* only the first time you heroku create the project,
  * after you already deployed it, you just need to do
    'git push origin master' // on github
    'git push heroku branch' // on heroku
  * then you can see it with heroku open

$('p') when runnning this in jQuery, we need to load the jQuery module every time
we need to use this $ variable, but using plugins, we tell the webpack to look that
for, and if it finds them, and there is not variable declare, then the webpack will
download the module and require it, and name that variable.

we don't load in css and foundation in app.jsx.
* loading css and jS together is kind of weird, but it is more common, when people are
bundling and packaging together.
* when we create our module, it is better if we create CSS also in our component

---------------------------------------------
## React Component life cycle method:
* Mounting: automatically execute by react respectively.
* componentWillMount(): is called when your component is ever render/ where you set your state
* componentDidMount(): is called after the component is render/ you can make any changes with the actually DOM elements
    * Use ComponentDidMount to set the modal.

Prop types: which property a component expect whether it is a string, a value or a
number, and whether it is require.
 - property validation is not as quite you expect:
propTypes: key prop name: value (appropriate prop types element)
  Ex: optionalArray: React.PropTypes.array
  and to add isRequire property is it has to be required to pass down from the parent,
  requireFunc (property): React.ProtoTypes.array; // means it has to be passed down.
-------------------------------------------------

## Adding Custom CSS:
SCSS: it is an extension of CSS3, adding nested rules, variables, mixins, selectors, inheritance,
and more. It's translated to well-formatted, standard CSS using a the command line tools,
or a web framework plugin. So mainly it is because it has the feature that CSS lacks,
and all the SASS pre-compiler which in the end creates CSS. It is not an extension to the
CSS standard itself.
  * we can create global variable that CSS doesn't have.
  * we need to add/install a SCSS loader to the webconfig like Foundation and then require it.
  * we need to install node-sass, which convert the scss to css. (take longer because node-sass has a bit things in it)
  * require('style!css!sass!applicationStyles') when connecting it to the app.jsx adding the sass!

After react put the element in the dom, then foundation is moving them,
react has to render the dom everytime.

*Forms that are created with or without React will reload when submiitted.
If you have a form that you want to handle without a page reload, attach an onSubmit property. onClick is best used when you want to respond to an
actual click event, not a form submission.
------------------------------------------------
### Why is jquery considered a devDependency rather than a normal dependency?
all devDependencies is because it is because webpack bundle the content of the
client-side modules in the bundle.js file which gets deployed to the server.
Any non client-side module such as express will need to remain dependencies.

require('style!css!foundation-sites/dist/foundation.min.css')
The "name!" syntax is used to tell webpack which loaders to use. The exclamation mark is just the convention they picked.
These two loaders will process the css file and add the styles to the project. The css! loader will run first and then style! will execute.

### Requiring CSS: you will need to install the necessary loaders, then you need to require the css file
that react-input-range library provide. You could add this call into app.jsx to load in the styleshee:
require('style-loader!css-loader!react-input-range/dist/react-input-range.min.css');
after this, stylesheet will be traditionally imported from app.scss since all style-sheet will then compiled
at once. 

