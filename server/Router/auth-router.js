const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller')

router.route('/home').get(authController.home);
router.route('/registration').post(authController.registration);
router.route('/login').post(authController.login);

module.exports = router;