const express = require('express');
const statusRoutes = require('./status/status.routes');
const signupRoutes = require('./signup/signup.routes');
const loginRoutes = require('./login/login.routes');
const logoutRoutes = require('./logout/logout.routes');
const certificateDetails= require('./certificatedetails/certificate.routes');
const templateRoutes = require('./templateApi/templateApi.routes');
const forgotPasswordRoutes = require('./forgotPassword/forgotPassword.routes');

const router = express.Router();

router.use('/status', statusRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/certificate', certificateDetails);
router.use('/certificates', templateRoutes);
router.use('/forgot', forgotPasswordRoutes);

module.exports = router;