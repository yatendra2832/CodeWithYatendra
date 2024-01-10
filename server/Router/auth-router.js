const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller')
const { signupSchema, loginSchema } = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');

router.route('/home').get(authController.home);
router.route('/registration').post(validate(signupSchema), authController.registration);
router.route('/login').post(validate(loginSchema), authController.login);

module.exports = router;