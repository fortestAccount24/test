const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    familyName : {
        type : String,
    },
    email : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true
    },
})
module.exports = mongoose.model('user', UserSchema);
