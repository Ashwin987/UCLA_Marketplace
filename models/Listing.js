const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    // Common fields for all listings
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },  // Category like 'Tutoring', 'Moving Help', etc.
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    school: { type: String, required: true },

    // Fields for Tutoring listings
    subject: { type: String },
    className: { type: String },

    // Fields for Moving Help listings
    helpersNeeded: { type: Number },
    estimatedTime: { type: Number },
    movingDescription: { type: String },

    // Fields for Event Cleanup listings (if needed)
    eventType: { type: String },
    startTime: { type: String },
    cleanersNeeded: { type: Number },

    // Fields for Other listings
    jobType: { type: String },
    paymentType: { type: String },
});

module.exports = mongoose.model('Listing', listingSchema);
