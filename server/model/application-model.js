const { Schema, model, default: mongoose } = require('mongoose');

const skillsEnum = ['Subtitle Writer', 'Python Dev', 'PHP Dev', 'Javascript Dev', 'JAVA Dev', 'MERN Dev', 'Content Writer', 'Video Editor'];

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
    skills: {
        type: String,
        enums: skillsEnum,
        required: true
    },
    isAgreed: {
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