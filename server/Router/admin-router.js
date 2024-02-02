const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin-controller')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
// users related routes
router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById)

router.route('/users/update/:id').put(authMiddleware, adminMiddleware, adminController.updateUserById);

// contact related routes
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteContactById);


// application related routes
router.route('/applications').get(authMiddleware, adminMiddleware, adminController.getAllApplication);

router.route('/applications/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteApplicationById)
module.exports = router;