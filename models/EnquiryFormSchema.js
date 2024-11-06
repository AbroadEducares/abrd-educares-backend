const mongoose = require('mongoose');

const EnquiryFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: { // Make sure to use the same key as in your request body
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("EnquiryForm", EnquiryFormSchema);
