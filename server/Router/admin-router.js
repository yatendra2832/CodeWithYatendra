const express = require('express');
const router = express.Router();
const { getAllUsers, getAllContacts, getAllApplication } = require('../controller/admin-controller')

// users related routes
router.route('/users').get(getAllUsers);

// contact related routes
router.route('/contacts').get(getAllContacts);

// application related routes
router.route('/applications').get(getAllApplication);
module.exports = router;