const storage = require('./storage');

function getMessages(){
    return new Promise((resolve, reject)=>{
        const messages = storage.retrieveMessages();
        if(!messages){
            reject('Couldnt retrieve messages from database');
        }else{
        resolve(messages);
        }
    })
}

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
            const stored = storage.saveMessage(fullMessage);
            if(stored){
                resolve(fullMessage);
            }else{
                reject('Message not stored');
            }
        }
    })
}


module.exports = {
    addMessage,
    getMessages
}