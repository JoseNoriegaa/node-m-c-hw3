/**
 * Primary file for the API
 */

// Dependencies
const Server = require('./lib/server');
const fs = require('fs');
const path = require('path');
const App = Server(true, true); // HTTP and HTTPS are enabled

// Routes
const routePath = path.join(__dirname, 'routes');
fs.readdirSync(routePath).forEach((file) => {
  require(path.join(routePath, file))(App);
});

// Start the server
App.init();
