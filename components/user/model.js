const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});


const Model = mongoose.model('User', userSchema);

module.exports = Model;

