// Import required modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000

// Use body-parser to parse JSON in request bodies
app.use(bodyParser.json());

// An array to store the medical bills
let bills = [];

// Route for getting the list of medical bills
app.get('/items', (req, res) => {
  res.json(bills);
});

// Route for creating a new medical bill
app.post('/items', (req, res) => {
  // Get the bill details from the request body
  let bill = req.body;

  // Validate the bill details
  if (!bill.patientName || !bill.patientAddress || !bill.hospitalName || !bill.dateOfService || !bill.amount) {
    return res.status(400).json({ error: 'Bad request. All bill details are required.' });
  }

  // Add the bill to the array of bills
  bills.push(bill);

  // Return the created bill
  res.json(bill);
});

// Start the server
app.listen(port, () => {
  console.log(`Medical Bill Upload Service is running on http://localhost:${port}`);
});

module.exports = app;
