const User = require('../model/user-model')
const bcrypt = require('bcrypt')
// Home Logic
const home = async (req, res) => {
    try {
        res.send('Welcome to our CodeWithYatendra Home Page')
    } catch (error) {
        console.log(error);
    }
}

// Registration Logic
/*
1.Get Registration data : Retrieve user data (username , email , password).
2. Check Email Exsistence : Check if the email is already refisterred.
3. Hash Password: Securely hash the password
4. Create User: create a new user with the hashed password.
5. Save to DB: Save user data to the database
6. Respond: Respond with the "Registration Successful" or handle the errors */
const registration = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400).send("User Already Exist");
        }

        const userCreated = await User.create({ username, email, phone, password });

        res.status(200).json({
            msg: "Registration Successfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).send({ message: "Invalid Credential" });
        }

        const user = bcrypt.compare(password, userExist.password);

        if (user) {
            res.status(200).json({
                message: "Login Successfully",
                token: userExist.generateToken(),
                userId: userExist._id.toString()
            })
        } else {
            return res.status(400).send("Invalid Email and Password");
        }

    } catch (error) {
        res.status(500).send("Internal Server Error : ", error);
    }
}
module.exports = { home, registration, login }