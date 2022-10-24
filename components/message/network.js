//Handles Supported requests and forwards them to respective controllers
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')


const router = express.Router();
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

//Get request for /message with specific id
router.get('/:id', (req, res)=>{
    controller.getMessageById(req.params.id)
        .then((message)=>{
            response.success(req, res, 200, message);
        })
        .catch((err)=>{
            response.error(req, res, 500, 'Couldnt retrieve message, please try again later', err)
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

//Patch request for /message
router.patch('/:id', (req, res)=>{
    console.log(req.body.message);
    controller.modifyMessage(req.params.id, req.body.message)
        .then((newMessage)=>{
            response.success(req, res, 200, newMessage)
        })
        .catch((err)=>{
            response.error(req, res, 400, 'Couldnt modify message', err)
        })

})

router.delete('/:id', (req, res)=>{
    console.log(req.params.id);
    controller.removeMessage(req.params.id)
        .then((acknowledged)=>{
            console.log(`Message deleted = ${acknowledged}`);
            response.success(req, res, 200, 'message deleted')
        })
        .catch((err)=>{
            response.error(req, res, 400, 'Couldnt delete message', err)
        })
})




module.exports = router;