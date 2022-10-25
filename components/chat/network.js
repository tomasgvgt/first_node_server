const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/', (req, res)=>{
    controller.addChat(req.body.users)
        .then((saved)=>response.success(req, res, 200, `Chat between ${req.body.users} was created`))
        .catch((err)=>{response.error(req, res, 500, 'Couldnt create chat')})
})

router.get('/:id', (req, res)=>{
    controller.getChat(req.params.id)
        .then((chats)=>{
            console.log(`Chats from ${req.params.id} was retrieved succesfully`);
            response.success(req, res, 200, chats)
        })
        .catch((err)=>response.error(req, res, 500, 'Coulndt retrieve Chat'));
} )


module.exports = router;