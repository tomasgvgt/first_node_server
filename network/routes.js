//All the routes supported in the server
const message = require('../components/message/network');
const user = require('../components/user/network');

//Function to add all the routes
function routes(server){
    //Set up the middlewear for the '/message/ route
    server.use('/message', message);
    //Set up a middlewear for the '/user' route
    server.use('/user', user);
}

module.exports = routes;