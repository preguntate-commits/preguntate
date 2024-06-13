const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    text: { type: String },
    type: { type: String },
    likes: {type: Number},
    dislikes: {type: Number},
    user: { type: String },
    ips: {type: Array},
})
module.exports = mongoose.model('Question', questionSchema)