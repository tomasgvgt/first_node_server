//Handles Supported requests and forwards them to respective controllers
const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

//Get request for /message
router.get('/', (req, res)=>{
    controller.getMessages()
        .then((messages)=>{
            response.success(req, res, 200, messages);
        })
        .catch((err)=>{
            response.error(req, res, 500, 'Couldnt retrieve messages, please try again later', err)
        });
})

//Post request for /message
router.post('/', (req, res)=>{
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, 201, fullMessage)
        })
        .catch((err) => {
            response.error(req, res, 404, 'Couldnt create new message', err)
        });
})

module.exports = router;