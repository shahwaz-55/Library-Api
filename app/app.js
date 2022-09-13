const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
http_formatter = require('./util/http_formatter');


const app = express();




app.use(cors('*'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//app.use('/student', require('./router/students_routes'));
app.use('/book', require('./router/book_routes'));
//app.use('/libraian', require('./router/libraian_routes'));
//app.use('/issuebook', require('./router/book_issue_routes'));


app.use((req, res, next) => {
    const error = new error ('Invalid request');
    res.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status = error.status || 500;
    return res.json(
        http_formatter(error, error.message, false)
    );
})

module.exports = app;
