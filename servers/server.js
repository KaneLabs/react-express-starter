'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require("path")
const cookieParser = require('cookie-parser')



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser())

// setting up the places to grab files from
// app.use('/javascripts', express.static(__dirname + "/../app/javascripts"));
// app.use('/stylesheets', express.static(__dirname + "/../app/stylesheets"));
app.use(express.static(path.join(__dirname)));


// setting up api routes
// app.use('/api/classifieds', classifieds);

const indexHTML = `
  <!DOCTYPE html>
  <html>

    <head>
      <meta charset="utf-8">
    </head>

    <body>
      <div class='app'></div>
    </body>

    <script type="text/javascript" src="build.js"></script>
  </html>
`

app.use('*', function (req, res, next) {
  res.send(indexHTML)
})

// const port = process.env.PORT || 3000;

app.use(function (err, req, res, next) { // <--- #3
  const response = {
    message: err.message
  }
  if (req.app.get('env') === 'development') {
    response.stack = err.stack
  }

  res.status(err.status || 500).json(response)
})
//
// app.listen(port, () => {
//   console.log('Listening on port', port);
// });

module.exports = app;
