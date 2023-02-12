// Import required modules
const express = require('express');
const router = express.Router();

// An array to store the medical bills
let bills = [];

// Route root
router.get('/', (_, res) => {
    res.send("API for uploading and retrieving medical bills");
});   

// Route for getting the list of medical bills
router.get('/items', (_, res) => {
  res.json(bills);
});

// Route for creating a new medical bill
router.post('/items', (req, res) => {
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

// export the router so that we can consume it from the app
module.exports = router;