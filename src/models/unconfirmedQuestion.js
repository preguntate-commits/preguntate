const mongoose = require('mongoose')

const unconfirmedQuestionSchema = mongoose.Schema({
    text: { type: String },
    type: { type: String },
    likes: {type: Number},
    dislikes: {type: Number},
    user: { type: String },
    ips: {type: Array},
    userId: {type: String},
})
module.exports = mongoose.model('UnconfirmedQuestion', unconfirmedQuestionSchema)