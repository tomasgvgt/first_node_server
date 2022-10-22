//Database model with mongo db and mongoose

const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

//How do I want my data to be organized
const messageSchema = mongoose.Schema({
    user: {
        type: String,
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
