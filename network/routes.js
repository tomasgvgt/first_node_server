//All the routes supported in the server
const message = require('../components/message/network');

//Function to add all the routes
function routes(server){
    //Set up the middlewear for the '/message/ route
    server.use('/message', message);
}

module.exports = routes;