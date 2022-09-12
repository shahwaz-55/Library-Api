//const { request, response } = require('express');
const Libraian = require('../model/librarian_model');
const http_formatter = require('../util/http_formatter');


const getLibraian = async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const librarian = await Libraian.find({})
        return response.status(200).json(http_formatter( librarian,'users got succesfully'));
    } catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
            }
    }
    const createbook = async (request, response) => {
        try {
            const librarian = await librarian.create(request.body);
            return response.status(201).json(
                http_formatter(librarian, 'user created successfully'),
                );
            
        } catch ( err ) {
            return response.status(400).json(http_formatter(err, 'something went wrong, please try again', false));
    }
}

module.exports = {
    getLibraian,
    createLibrarian,
}