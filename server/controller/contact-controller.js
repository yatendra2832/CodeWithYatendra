const Contact = require('../model/contact-model');

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ msg: "Form Submitted Successfully" })
    } catch (error) {
        return res.status(500).josn({ msg: "Internal Server Error" })
    }
}

module.exports = contactForm;