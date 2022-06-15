const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://khoa:Khoa01203287757@cluster0.angvb.mongodb.net/ATN?retryWrites=true&w=majority") ,{
   

            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
}

module.exports = mongoose;