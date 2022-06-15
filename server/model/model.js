const mongoose = require('/connection');

var schema = new mongoose.Schema({
    Code : {
        type : String,
        required: true
    },
    Name : {
        type: String,
        required: true,
        unique: true
    },
    Qty : String,
    Price : String,
    
})


const Productdb = mongoose.model('product', schema);


module.exports = Productdb;