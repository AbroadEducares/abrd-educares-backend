const express = require('express');
const router = express.Router();
const {AgentForm}=require('../controllers/AgentForm');
const {NewsLetter}=require('../controllers/NewsLetter');
const { EnquiryForm } = require('../controllers/EnquiryForm');

router.post('/AgentForm',AgentForm);
router.post('/NewsLetter',NewsLetter);
router.post('/EnquiryForm', EnquiryForm);

module.exports = router;