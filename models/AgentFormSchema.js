const mongoose = require('mongoose');

const AgentFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    agencyname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    phone: { // Make sure to use the same key as in your request body
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    services:{
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
})

module.exports = mongoose.model("Agent", AgentFormSchema);