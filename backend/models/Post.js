var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    message: String,
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Post', postSchema)