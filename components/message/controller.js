const storage = require('./storage');

function addMessage(user, message){
    return new Promise((resolve, reject)=>{
        if(!user){
            reject('Missing user')
        }
        if(!message){
            reject('Missing message')
        }
        else{
            const fullMessage = {
                user,
                message,
                date: new Date()
            }
            storage.saveMessage(fullMessage);
            resolve(fullMessage);
        }
    })
}

function getMessages(){
    return new Promise((resolve, reject)=>{
        const messages = storage.retrieveMessages();
        resolve(messages);
    })
}


module.exports = {
    addMessage,
    getMessages
}