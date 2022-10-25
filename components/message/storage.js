const Model = require('./model');

async function retrieveMessages(queryParams){
    try{
        if(queryParams){
            if(queryParams['chat']){
                const messages = await Model.findOne({
                    chat: queryParams['chat']
                })
                .populate('user')
                .exec()
                console.log('Messages retrieved')
                return messages;

            }
        }
        const messages = await Model.find()
            .populate('user')
            .exec()
        console.log('Messages retrieved')
        return messages;
    }catch(error){
        console.error(error);
        return false;
    }
}

async function retrieveMessageById(id){
    console.log(id);
    const message = await Model.findOne({ _id: id })
        .populate('user')
        .exec()
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

async function removeMessage(id){
    const query = await Model.deleteOne({ _id: id});
    return query.acknowledged;
}


module.exports = {
    saveMessage,
    retrieveMessages,
    retrieveMessageById,
    modifyMessage,
    removeMessage
}