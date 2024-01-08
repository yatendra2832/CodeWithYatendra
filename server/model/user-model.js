// schema:Defines the structure of the documents within a collection. It Specifies the fields, their types, and any additional constraints or validations.
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        next()
    }
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;

    } catch (error) {
        console.log('Error in hashing the password', error)
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;