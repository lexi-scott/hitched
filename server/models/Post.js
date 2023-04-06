const { Schema, model } = require('mongoose');

// import schema from Rsvp.js
const commentSchema = require('./Comment');
const User = require('./User');

const postSchema = new Schema(
  {
    postId: {
      type: Number,
      required: true,
      unique: true,
    },
    author: User,
    content: {
        type: String
    },
    comments: [commentSchema]    
  },
);

const Post = model('Post', postSchema);

module.exports = Post;
