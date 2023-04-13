const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Post = require("./Post");

// import schema from Rsvp.js
const rsvpSchema = require("./Rsvp");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    weddingparty: {
      type: Boolean,
    },
    couple: {
      type: Boolean,
    },
    // set rsvp to be a data that adheres to the rsvpSchema
    rsvp: rsvpSchema,
    //save registry item this user selected
    registryItem: {
      type: String,
    },
    //Added posts array
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// // hash user password
// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// custom method to compare and validate password for logging in
//changed to test password
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
// userSchema.virtual('bookCount').get(function () {
//   return this.savedBooks.length;
// });

const User = model("User", userSchema);

module.exports = User;
