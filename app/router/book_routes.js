const { Router } = require('express');
const express = require('express');
const book_Router = express.Router();
const book_controller = require('../controller/book_controller')


book_Router.get('/user', book_controller.getStudent);
book_Router.post('/', book_controller.createNewUser);
book_Router.put('/', book_controller.updateUser);
book_Router.delete('/', book_controller.deleteUser);


module.exports = Router;
