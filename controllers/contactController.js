const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {

    try {

        const { name, email, message } = req.body;

        await Contact.create({

            name,
            email,
            message

        });

        res.json({

            success: true,

            message: "Message sent successfully."

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};