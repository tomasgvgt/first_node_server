//Database model with mongo db and mongoose

const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

//How do I want my data to be organized
const messageSchema = mongoose.Schema({
    chat: {
        type: mongoose.Schema.ObjectId,
        ref: 'Chat',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const Model = mongoose.model('Message', messageSchema);


module.exports = Model;
