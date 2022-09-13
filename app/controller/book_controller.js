const book = require('../model/book_model');
const http_formatter = require('../util/http_formatter');


const getbooks = async (request, response) => {
    try {
        const {pageNo, perPage} = request.query;
        const users = await book.find({}).skip(perPage*(pageNo-1)).limit(perPage);
        return response.status(200).json(http_formatter(users,'users got succesfully'));
    }
    
    catch (error) {
        console.log(error);
        return response.status(400).json(http_formatter(error, "Something went wrong, please try again", false));
      
    }
}
const createbook = async (request, response) => {
        try {
            const users = await book.create(request.body);
            return response.status(201).json( http_formatter(users, 'user created successfully'))} 
        catch ( err ) {
            return response.status(400).json(http_formatter(err, 'something went wrong, please try again', false));
        }
}
module.exports = {
    getbooks,
    createbook,
}