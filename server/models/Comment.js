const { Schema, model } = require('mongoose');
const User = require('./User');

const commentSchema = new Schema(
  {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: User,
          postID: Number,
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
  },
);

module.exports = commentSchema;
