const { request, response } = require('express');
const book = require('../model/book_issue_model');
const http_formatter = require('../util/http_formatter');


const getbooks = async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const issuedbook = await Issuedbook.find({}).populate('student_id book_id issued_by')
        return response.status(200).json(http_formatter( issuedbook,'users got succesfully'));
    } catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
            }
    }
    const createbook = async (request, response) => {
        try {
            const issuedbook = await Issuedbook.create(request.body);
            return response.status(201).json(
                http_formatter(issuedbook, 'user created successfully'),
                );
            
        } catch ( err ) {
            return response.status(400).json(http_formatter(err, 'something went wrong, please try again', false));
    }
}

module.exports = {
    getIssuedbooks,
    createdIssuedbooks,
}