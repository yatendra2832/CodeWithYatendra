const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Welcome to our home page using Router')
})

module.exports = router;