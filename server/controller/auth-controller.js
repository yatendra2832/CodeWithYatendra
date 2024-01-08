

// Home Logic
const home = async (req, res) => {
    try {
        res.send('Welcome to our CodeWithYatendra Home Page')
    } catch (error) {
        console.log(error);
    }
}

const registration = async (req, res) => {
    try {
        // console.log(req.body);
        res.status(200).send({ message: req.body });
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