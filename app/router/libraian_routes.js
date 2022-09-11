const express = require('express');
const Router = express.Router();
const _controller = require('../controller/librarian_controller')


Router.get('/', _controller.getLibraian);
Router.post('/', _controller.createLibraian);
Router.put('/', _controller.updateUser);
Router.delete('/', _controller.deleteUser);

module.exports = Router;