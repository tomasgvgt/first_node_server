//Server configuration
const express = require('express');
const app = express();
const server = require('http').createServer(app);
//const {connect, socket} = require('./socket');
const {socket, connect} = require('./socket');
const path = require('path');
const routes = require('./network/routes');
const connectToDatabase = require('./db');


connect(server);

//EXPERIMENT
socket.io.on('connection', (socket)=>{
    console.log("New client connected");
    //Emit greeting to new client
    socket.emit('greeting', 'Hello new user!');
})

const port = 3000;
//Parse request bodys with json and text formats.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//connect to database
connectToDatabase();

//use the personalized router (mini application to handle routes in a modular way), in routes.js
routes(app);

//everytime the '/app' endpoint is called, serve static files from the '/public' directory
app.use('/app', express.static(path.join(__dirname, 'public')))


//Listen to port 3000
server.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})

