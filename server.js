/* deploying to heroku:
    1. heroku create
    2. git push heroku master
    3. heroku open
*/
var express = require('express');

// work the same but it is like a final, constant
const PORT = process.env.PORT || 3000;

// Create our app
var app= express();

/* direct all https traffic to http */
app.use(function(req, res, next){ // next is when the middleware is done
  if(req.headers['x-forwarded-proto'] === 'http'){
    next(); // it will keep executing so return it to the browser
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }

});

app.use(express.static('public'));





app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
