const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  subject: {type: String, required: true},
  article: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;