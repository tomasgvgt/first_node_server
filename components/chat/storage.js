const Model = require('./model');

async function saveChat(chat){
    const newChat = new Model(chat);
    await newChat.save();
    return true;
}

async function retrieveChat(userId){
    const chats = await Model.find({users: userId})
        .populate('users')
        .exec()
    return chats;
}


module.exports = {
    saveChat,
    retrieveChat,
}