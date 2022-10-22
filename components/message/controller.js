const storage = require('./storage');

function getMessages(){
    return new Promise(async (resolve, reject)=>{
        const messages = await storage.retrieveMessages();
        if(!messages){
            reject('Couldnt retrieve messages from database');
        }else{
        resolve(messages);
        }
    })
}

function getMessageById(id){
    return new Promise(async (resolve, reject)=>{
        const message = await storage.retrieveMessageById(id);
        if(!message){
            reject('Couldnt retrieve message from database');
        }
        resolve(message);
    })
}

function addMessage(user, message){
    return new Promise(async (resolve, reject)=>{
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
            const stored = await storage.saveMessage(fullMessage);
            if(stored){
                resolve(fullMessage);
            }else{
                reject('Message not stored');
            }
        }
    })
}

function modifyMessage(messageId, newMessage){
    return new Promise(async (resolve, reject)=>{
        if(!messageId){
            reject('No messageId');
        }
        if(!newMessage){
            reject('Missing message');
        }else{
            const query = await storage.modifyMessage(messageId, newMessage);
            console.log(query.message);
            resolve(newMessage);
        }
    })
}

function removeMessage(messageId){
    return new Promise(async (resolve, reject)=>{
        if(!messageId){
            reject('No messageId');
        }else{
            const acknowleged = await storage.removeMessage(messageId);
            resolve(acknowleged);
        }
    })
}


module.exports = {
    addMessage,
    getMessages,
    getMessageById,
    modifyMessage,
    removeMessage
}