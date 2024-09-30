// server.js

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies and handle CORS
app.use(express.json());
app.use(cors());

// Import models
const User = require('./models/User');
const Listing = require('./models/Listing'); // Adjusted to directly import the Listing model

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('Connection error:', err));

// Define routes here

// Create a new listing
app.post('/listings', async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.status(201).send(newListing);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all listings filtered by school (adjusted to handle school filtering)
app.get('/listings', async (req, res) => {
  try {
    const school = req.query.school; // Retrieve the school query parameter from request
    const listings = await Listing.find(school ? { school: school } : {}).populate('createdBy', 'name email');
    res.send(listings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a specific listing by ID
app.get('/listings/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('createdBy', 'name email');
    if (!listing) {
      return res.status(404).send('Listing not found');
    }
    res.send(listing);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a listing by ID
app.put('/listings/:id', async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedListing);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a listing by ID
app.delete('/listings/:id', async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.send({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
