const express = require('express');
const router = express.Router();
const { EduFair } = require('../controllers/EduFair');

router.post('/EduFair', EduFair); // Consistent naming

module.exports = router;   