// schema:Defines the structure of the documents within a collection. It Specifies the fields, their types, and any additional constraints or validations.
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// UserSchema
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

// hashing the password
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

// jwt token
userSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )

    } catch (error) {
        console.error(error)
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;