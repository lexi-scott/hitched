const { Schema, model } = require('mongoose');

// import schema from Rsvp.js
const commentSchema = require('./Comment');
//import {User} from require('./User');

const postSchema = new Schema(
  {
    postId: {
      type: Number,
      required: true,
      unique: true,
    },
    author: String,
    content: {
        type: String
    },
    comments: [commentSchema]    
  },
);

const Post = model('Post', postSchema);

module.exports = Post;
