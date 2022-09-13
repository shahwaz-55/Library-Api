const express = require('express'),
Router = express.Router();

const _controller = require('../controller/book_controller');
Router.get('/', _controller.getbooks);
Router.post('/', _controller.createbook);

module.exports = Router;



