// Import required modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000

// Use body-parser to parse JSON in request bodies
app.use(bodyParser.json());

// Use routes
app.use('/', require('./routes/bills'))

// Start the server
app.listen(port, () => {
  console.log(`Medical Bill Upload Service is running on http://localhost:${port}`);
});

module.exports = app;
