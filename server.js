//Server configuration
const express = require('express');
const path = require('path');
const routes = require('./network/routes');
const connectToDatabase = require('./db');

//Create server.
const app = express();
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
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})

