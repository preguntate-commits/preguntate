const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    admin: { type: Boolean, default: false },
    questions: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        }
    ],
})
module.exports = mongoose.model('User', userSchema)