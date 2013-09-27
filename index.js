var
  express = require("express"),
  util    = require("util");
var
  log     = util.log;

// Framework? init.
var app = express().
  use(express.bodyParser()).
  use(express.logger("dev")).
  use(express.compress()).
  use(express.static("./client/")).
  use(function(req, res, next)
  {
    console.log(req.ip);
    next();
  });

// Port setup.
var
  port = process.argv[2] || 80;

app.listen(parseInt(port, 10));
console.log("NodeJS Express HTTP server running on port ", port);
