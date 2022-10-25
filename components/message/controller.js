const storage = require('./storage');

async function getMessages(queryParams){
        const messages = await storage.retrieveMessages(queryParams);
        if(messages){
            return (messages);
        }else{
            throw new Error('Couldnt retrieve messages from database')
        }
}

async function getMessageById(id){
        const message = await storage.retrieveMessageById(id);
        if(message){
            return (message);
        }else{
            throw new Error('Couldnt retrieve message from database');
        }
}

async function addMessage(chat, user, message, file){
        if(!chat){
            throw new Error('Missing chat')
        }
        if(!user){
            throw new Error('Missing user')
        }
        if(!message){
            throw new Error('Missing message')
        }
        else{
            let fileUrl = '';
            if(file){
                fileUrl = 'http://localhost:3000/app/files/' + file.filename;
                console.log(fileUrl);
            }
            const fullMessage = {
                chat,
                user,
                message,
                file: fileUrl,
                date: new Date()
            }
            const stored = await storage.saveMessage(fullMessage);
            if(stored){
                return (fullMessage);
            }else{
                throw new Error('Message not stored');
            }
        }
}

async function modifyMessage(messageId, newMessage){
        if(!messageId){
            throw new Error('No message ID');
        }
        if(!newMessage){
            throw new Error('Missing message');
        }else{
            const query = await storage.modifyMessage(messageId, newMessage);
            return(query.message);
        }
}

async function removeMessage(messageId){
        if(!messageId){
            throw new Error('No messageId');
        }else{
            const acknowleged = await storage.removeMessage(messageId);
            return(acknowleged);
        }
}


module.exports = {
    addMessage,
    getMessages,
    getMessageById,
    modifyMessage,
    removeMessage
}