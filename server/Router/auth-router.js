const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller')
const { signupSchema, loginSchema } = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');
const authMiddleware = require('../middleware/auth-middleware')

router.route('/home').get(authController.home);
router.route('/registration').post(validate(signupSchema), authController.registration);
router.route('/login').post(validate(loginSchema), authController.login);

router.route('/user').get(authMiddleware, authController.user);
module.exports = router;