const storage = require('./storage');

async function addChat(users){
    const chat = {
        users
    }
    const saved = storage.saveChat(chat);
    return(saved);
}

async function getChat(userId){
    const chats = await storage.retrieveChat(userId);
    return(chats);
}

module.exports = {
    addChat,
    getChat
}
