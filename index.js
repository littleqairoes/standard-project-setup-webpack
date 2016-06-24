// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
const express = require('express');		// call express
const app = express(); 				// define our app using express
const bodyParser = require('body-parser'); 	// get body-parser
const port = process.env.PORT || 8080;
const path 	   = require('path');

// APP CONFIGURATION ==================
// ====================================
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});


app.use(express.static(`${__dirname}/`));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(port);
console.log('Magic happens on port ' + port);
