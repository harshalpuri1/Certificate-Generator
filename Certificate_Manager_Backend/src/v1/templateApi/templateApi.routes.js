const express = require('express');
const router = express.Router();
const {getAllTemplates} = require('./templateApi.controller');

router.get('/url', getAllTemplates);

module.exports = router;
