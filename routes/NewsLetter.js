const express = require('express');
const router = express.Router();
const {NewsLetter}=require('../controllers/NewsLetter');

router.post('/NewsLetter',NewsLetter);

module.exports = router;