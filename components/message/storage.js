const Model = require('./model');
const mongoose = require('mongoose');

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

async function retrieveMessageById(id){
    console.log(id);
    const message = await Model.findOne({ _id: id });
    console.log(message);
    return message;
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

async function modifyMessage(id, newMessage){
    const query = await Model.findOneAndUpdate(
        { _id: id},
        { message: newMessage },
        { new: true }
      )
    return query;
}


module.exports = {
    saveMessage,
    retrieveMessages,
    retrieveMessageById,
    modifyMessage
}