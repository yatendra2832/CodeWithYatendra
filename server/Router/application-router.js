const express = require('express');
const router = express.Router();
const applicationForm = require('../controller/application-controller');
router.route('/applicationForm').post(applicationForm);

module.exports = router;