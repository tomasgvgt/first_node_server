const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res)=>{
    controller.getUsers()
        .then((users)=>response.success(req, res, 200, users))
        .catch((err)=>response.error(req, res, 500, 'Couldnt retrieve Users'))
})

router.get('/:id', (req, res)=>{
    controller.getUser(req.params.id)
        .then((user)=>response.success(req, res, 200, user))
        .catch((err)=>response.error(req, res, 500, 'Couldnt retrieve User'))
})

router.post('/', (req, res)=>{
    controller.addUser(req.body.name)
        .then((name)=>response.success(req, res, 201, name))
        .catch((err)=>response.error(req, res, 500, 'Couldnt create user', err))
})

router.delete('/:id', (req, res)=>{
    controller.removeUser(req.params.id)
        .then((removed)=>{
            console.log(`User deleted: ${removed}`);
            response.success(req, res, 200, `User ${req.params.id} deleted`)
        })
        .catch((err)=>response.error(req, res, 500, 'User couldnt be deleted', err))
})



module.exports = router;