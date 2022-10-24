const Model = require('./model');

async function retrieveUsers(){
    const users = await Model.find();
    console.log('Messages Retrieved');
    return(users);
}

async function retrieveUser(id){
    const user = await Model.findOne({_id: id});
    console.log(user);
    return(user);
}
async function saveUser(name){
    const user = new Model(name);
    await user.save();
    return true;
}

async function removeUser(id){
    const query = await Model.deleteOne({_id: id});
    console.log(query);
    return(query.acknowledged);
}

module.exports = {
    retrieveUsers,
    saveUser,
    removeUser
}