const mongoose = require('mongoose');

const NewsLetterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date, // Corrected the 'Date' type casing
        default: Date.now
    }
});

module.exports = mongoose.model("NewsLetter", NewsLetterSchema);
