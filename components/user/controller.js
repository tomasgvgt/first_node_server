const storage = require('./storage');

async function getUsers(){
    const users = await storage.retrieveUsers();
    return(users);
}

async function getUser(id){
    const user = await storage.retrieveUsers(id);
    return(user);
}
async function addUser(name){
    const user = {
        name,
    }
    const saved = await storage.saveUser(user);
    return(name);
}

async function removeUser(id){
    const removed = await storage.removeUser(id);
    return (removed);
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    removeUser
}
