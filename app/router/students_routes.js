const express = require('express');
const Router = express.Router();
const _controller = require('../controller/students_controller')


Router.get('/', _controller.getstudents);
Router.post('/', _controller.createNewUser);
Router.put('/', _controller.updateUser);
Router.delete('/', _controller.deleteUser);

module.exports = Router;