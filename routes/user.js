const express = require('express');
const router = express.Router();
const { EnquiryForm } = require('../controllers/EnquiryForm');

router.post('/EnquiryForm', EnquiryForm); // Consistent naming

module.exports = router;
