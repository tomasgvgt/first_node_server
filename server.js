//Server configuration
const express = require('express');
const path = require('path');
const router = require('./network/routes')

//Create server.
const app = express();
const port = 3000;

//Parse request bodys with json and text formats.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//use the personalized router (mini application to handle routes in a modular way), in routes.js
router(app);

//everytime the '/app' endpoint is called, serve the static content in the public directory
app.use('/app', express.static(path.join(__dirname, 'public')))


//Listen to port 3000
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})

