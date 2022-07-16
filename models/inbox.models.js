


const mongoose = require('mongoose');

const inBox = new mongoose.Schema({
    subject: {
        type: String,
    },
    mail_body: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    createdAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
})

module.exports = mongoose.model('inbox', inBox);