const express = require('express');
const Router = express.Router();
const _controller = require('../controller/book_issue_controller')


Router.get('/all', _controller.getstudents);
Router.post('/create', _controller.cretaeNewUser);
Router.put('/update', _controller.updateUser);
Router.delete('/', _controller.deleteUser);

module.exports = Router;