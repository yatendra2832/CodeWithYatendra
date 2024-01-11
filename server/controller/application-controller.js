const Application = require('../model/application-model');

const applicationForm = async (req, res) => {
    try {
        const response = req.body;
        const data = await Application.create(response);
        return res.status(200).json({ message: "Application Send Successfully", data });
    } catch (error) {

        res.status(500).json({ message: "Application not delivered", error });
    }
}

module.exports = applicationForm;