require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app/app');


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port:${PORT}`));


const DB_URI = process.env.DB_URI;
mongoose.Promise = global.Promise;


const_option = {
    socketTimeoutMS: 0,
    keepAlive: true,
    useNewUrlParser: true,
};

mongoose.connect(DB_URI, _option).then(() => console.log(`DB connected`)).catch(err =>{
    console.error(err);
    process.exit(1);
})