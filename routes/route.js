const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');



/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update_user', services.update_user)


// API
//route.post('/api/users', controller.create);
route.get('/api/Users', controller.find);
route.put('/api/Users/:id', controller.update);
//route.delete('/api/users/:id', controller.delete);


module.exports = route