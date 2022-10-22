const Model = require('./model');

async function retrieveMessages(){
    try{
        const messages = await Model.find();
        console.log('Messages retrieved')
        return messages;
    }catch(error){
        console.error(error);
        return false;
    }
}

async function saveMessage(fullMessage){
    try{
        const newMessage = new Model(fullMessage);
        await newMessage.save();
        console.log('Message stored');
        return true;
    }catch(err){
        return false;
    }
}

module.exports = {
    saveMessage,
    retrieveMessages
}