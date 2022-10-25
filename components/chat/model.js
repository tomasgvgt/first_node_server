const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    users: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        }
    ]
})

const Model = mongoose.model('Chat', chatSchema);

module.exports = Model;