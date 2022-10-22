const mongoose = require('mongoose');
const Model = require('./model');
const {DB_HOST, DB_USER, DB_PASS} = require('../../credentials')
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('[db] Succesfully connected'))
    .catch((err)=>console.error(`[db] ${err}`));


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