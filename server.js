require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app/app');


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port:${PORT}`));


const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI,).then(() => console.log(`DB connected`)).catch(err =>{
    console.error(err);
    process.exit(1);
})