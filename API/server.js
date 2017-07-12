// the point of this file is to serve our react app
var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');

var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, `../App`)));
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
`;

// Respond to all GET requests with our React app
// react-router will handle the routing client side and direct to the right component
app.get('*', (req, res) => res.send(indexHTML));

// all uncaught request will send 404
app.use((req, res) => res.sendStatus(404));

const server = http.createServer(app);

// callback fired when server is running
const onListen = () => {
  console.log('listening on ', server.address().port);
};

// run server
server.listen(process.env.PORT || '3000', onListen);

module.exports = server;
