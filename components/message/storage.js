const db = require('mongoose');
const Model = require('./model');
const {DB_HOST, DB_USER, DB_PASS} = require('../../credentials')
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`;



db.Promise = global.Promise;

db.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('[db] Succesfully connected'))
    .catch((err)=>console.error(`[db] ${err}`));

function saveMessage(fullMessage){
    const newMessage = new Model(fullMessage);
    newMessage.save();
    console.log('Message succesfully Stored');
}

async function retrieveMessages(){
    const messages = await Model.find();
    console.log('Messages retrieved')
    return messages;
}

module.exports = {
    saveMessage,
    retrieveMessages
}