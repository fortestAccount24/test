const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    enrollmentNumber: {
        type: Number,
        min: 0,
        required: true

    },
    photo: {
        type: String,
    }
})

module.exports = student = mongoose.model('student', studentSchema)