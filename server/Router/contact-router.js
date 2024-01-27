const express = require('express');
const router = express.Router();
const contactForm = require('../controller/contact-controller')

router.route('/contactForm').post(contactForm);

module.exports = router;