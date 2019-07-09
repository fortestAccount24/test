const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presenceSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'student' },
    present:  {
        type: Boolean,
        default: false
    },

})

module.exports = presence = mongoose.model('presence', presenceSchema)