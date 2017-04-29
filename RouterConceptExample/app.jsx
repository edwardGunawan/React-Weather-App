/* There is 1 Router that takes the history of hashHistory, and Route that takes the
  path and the component
  Nested Route, the outer layer should just be component, instead of path, because
  path will let route guide you to that route in the URL, and if you do // then
  it will duplicate. Your second example doesn't work because it's trying to express
  // as a path to navigate to. Each path,
  even if duplicated, becomes a node in the route tree. If you don't mentioned the path
  then it will be the parent path, so in the link tag you just have to do, /. For the
  link tag you want to specify it from the root, for the path
  This is a thread issue: https://github.com/reactjs/react-router/issues/1950
  If you put a path in the route, the root path will have nothing to render, so
  it will be nothing, and if only if you route it to /MainTopTabs it will route it*/

  /* when your trying to change the whole URL */
  // Having a router is when you want to send it to other friend in that specific page,
  //  if you use like cloud9 you don't really need a lot of router because if you send it to
  //  someone they need to sign it or maybe it is get to the original page. If a lot of data is
  //  going on inside, you use router, because sometime a router change the whole page, and change
  //  the web URL. For facebook, if you go to events, you want to copy and paste the event and
  // send it to your friend, so if you friend see the URL with the query string, then it will be
  // that event page. It is having multiple html in the page rather than just 1.
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route component={MainTopTabs}>
            <IndexRoute component={Control}/>
            <Route path="PendingJobs" component={PendingJobs}/>
            <Route path="PrintHistory" compoennt={PrintHistory}/>
          </Route>
      </Route>
    </Router>,
    document.getElementById('content')

);
