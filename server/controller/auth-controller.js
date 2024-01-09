const User = require('../model/user-model')

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
            msg: "Registered User",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        res.status(200).send("<H1>Welcome to the Login Page</H1>");
    } catch (error) {
        console.log(error);
    }
}
module.exports = { home, registration, login }