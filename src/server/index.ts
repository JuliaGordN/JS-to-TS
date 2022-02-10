import http = require('http');
import events = require('./events');
import app = require("./server");

const port = app.get('port');

events.bind(http.createServer(app).listen(port), port);
