const express = require('express');
const router = express.Router();

const { AgentForm } = require('../controllers/AgentForm');
const { NewsLetter } = require('../controllers/NewsLetter');
const { EnquiryForm } = require('../controllers/EnquiryForm');
const { createEduExSummitForm } = require('../controllers/EduExSummitForm'); 

router.post('/AgentForm', AgentForm);
router.post('/NewsLetter', NewsLetter);
router.post('/EnquiryForm', EnquiryForm);
router.post('/EduExSummitForm', createEduExSummitForm); 

module.exports = router;
