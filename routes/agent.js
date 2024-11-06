const express = require('express');
const router = express.Router();
const {AgentForm}=require('../controllers/AgentForm');

router.post('/AgentForm',AgentForm);

module.exports = router;