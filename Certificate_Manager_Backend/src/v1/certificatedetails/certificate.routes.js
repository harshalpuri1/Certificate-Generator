const express = require('express');
const router = express.Router();
const { certificateDetails } = require('./certificate.controller');
const authenticate = require('../middlewares/session_authentication')


router.post('/user',authenticate, certificateDetails);

module.exports = router;
