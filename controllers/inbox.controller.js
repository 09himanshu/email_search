const inBox = require('../models/inbox.models')

exports.create = async (req, res) => {
    const obj = {
        subject: req.body.subject,
        mail_body: req.body.mail_body,
    }
    try {
        const mail = await inBox.create(obj);
        mail.userId = req._id;
        await mail.save();
        res.status(200).send(mail);
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`})
    }
}

