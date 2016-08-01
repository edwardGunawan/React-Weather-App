var express = require('express');

var port = process.env.PORT || 3000;

// Create our app
const PORT = express(); // work the same but it is like a final, constant

app.use(express.static('public'));

/* direct all https traffic to http */
app.use(function(req, res, next){ // next is when the middleware is done
  if(req.headers['x-forwarded-proto'] === 'http'){
    next(); // it will keep executing so return it to the browser
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }

});



app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
