const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/APM'));

app.use(function(req, res, next) {
      if ((req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect('https://' + req.get('Host') + req.url);
      } else
        next();
    });

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/APM/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
