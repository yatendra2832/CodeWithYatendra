const User = require('../model/user-model')
const Contact = require('../model/contact-model')
const Application = require('../model/application-model')

// Users
// getting all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select({ password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" })
        }
        return res.status(200).json({ users })
    } catch (error) {
        next(error);

    }
}

// Contacts
// getting All contacts
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "Contacts Not Found!" });
        }
        return res.status(200).json({ contacts });
    } catch (error) {
        next(error)
    }

}

// Application
// getting all the application form
const getAllApplication = async (req, res) => {
    try {
        const applications = await Application.find()
        if (!applications || applications.length === 0) {
            return res.status(404).json({ message: "No Application Found" });
        }
        return res.status(200).json({ applications });
    } catch (error) {
        next(error)
    }
}
module.exports = { getAllUsers, getAllContacts, getAllApplication }