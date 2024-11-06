const mongoose = require('mongoose');

const EduFairSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    lastLevelOfStudy: {
        type: String,
        enum: ["+2 (pursuing/passout)", "Graduation", "Post graduation & above"],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("EduFair", EduFairSchema);
