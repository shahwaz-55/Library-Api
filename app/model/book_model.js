const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    Name: {
        type: String,
        required: [true, "Name is mandatory, please enter the name!!"],
        trim: true,
        minLength: 2
    },
    price:{
        type: Number,
        required: true,
        minLength: 150,
        maxlength: 80000

    },
   
   /* authorName: {
        type: String,
    },
    category:{
        type: String,
    },
   price:{
        type: Number
    },
    ISBN:{
        type: Number,
       
    },
    publication:{
        type: String, 
    },
     available_count:{
        type:Number,
        required: true
    } ,
    
    isDeleted: {
        type: Boolean,
        default: false,
        required: false,
    }*/
}, {timestamps: true, versionKey:false});

module.exports = mongoose.model('Book', BookSchema);