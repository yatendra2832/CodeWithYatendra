const { Schema, model, default: mongoose } = require('mongoose');

const applicationSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    resumeLink: {
        type: String,
        required: true
    },
    selectedSkill: {
        type: String,
        required: true
    },
    agreeToTerms: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Application = new model('Application', applicationSchema);

module.exports = Application;