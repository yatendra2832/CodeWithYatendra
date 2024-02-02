const User = require('../model/user-model')
const Contact = require('../model/contact-model')
const Application = require('../model/application-model')

// Users //
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

// getting user by id
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}
//delete User by id
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User Deleted Successfully" })

    } catch (error) {
        next(error)
    }
}
// update user by id 
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData })
        return res.status(200).json(updatedData)
    } catch (error) {
        next(error)
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
// delete contact by thier id
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id
        await Contact.deleteOne({ _id: id })
        return res.status(200).json({ message: "Contact Deleted Successfully" });
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

module.exports = { getAllUsers, getAllContacts, getAllApplication, deleteUserById, getUserById, updateUserById ,deleteContactById }