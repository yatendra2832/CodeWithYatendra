const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: string,
        required: true
    }
})

const Contact = new model('Contact', contactSchema)

module.exports = Contact;