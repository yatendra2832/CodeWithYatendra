const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin-controller')
const authMiddleware = require('../middleware/auth-middleware')
const adminController = require('../middleware/admin-middleware')
// users related routes
router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUsers);

// contact related routes
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts);

// application related routes
router.route('/applications').get(authMiddleware,adminMiddleware,adminController.getAllApplication);
module.exports = router;