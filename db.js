//Connect to mongo database using mongoose
const mongoose = require('mongoose');
const {DB_HOST, DB_USER, DB_PASS} = require('./credentials')
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`;

function connectToDatabase(){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('[db] Succesfully connected'))
    .catch((err)=>console.error(`[db] ${err}`));
}
module.exports = connectToDatabase;