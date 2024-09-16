const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    className: { type: String, required: true },
    hourlyRate: { type: Number, required: true },
    details: { type: String, required: true },
  
});

module.exports = mongoose.model('Listing', listingSchema);
