const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const Post = require("../models/Post");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username: username }).populate("posts");
    },
    posts: async () => {
      return Post.find();
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },

    me: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        console.log(context.user);
        return User.findOne({ _id: context.user._id }).populate("posts"); //.populate('savedBooks');
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email}) => {
      const user = await User.create({ username, email });
      console.log("server adduser ", user);
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { content, postAuthor, image }) => {
      const newPost = await Post.create({ content, postAuthor, image });

      await User.findOneAndUpdate(
        { username: postAuthor },
        { $addToSet: { posts: newPost._id } }
      );

      return newPost;
    },
    addComment: async (parent, { postId, commentText, commentAuthor }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
        }
      );
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // const correctPw = await user.isCorrectPassword(password);

      // if (!correctPw) {
      //   throw new AuthenticationError("Incorrect credentials");
      // }

      const token = signToken(user);

      return { token, user };
    },
    //saveRsvp will return user
    saveRsvp: async (
      parent,
      { response, guests, children, specialFood, foodAllergy },
      context
    ) => {
      console.log("IN SERVER savePRVP 1");
      console.log(
        "IN SERVER savePRVP",
        response,
        guests,
        children,
        specialFood,
        foodAllergy
      );
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              rsvp: { response, guests, children, specialFood, foodAllergy },
            },
          },
          { new: true, runValidators: true }
        );

        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //changeRsvp will return user
    changeRsvp: async (
      parent,
      { response, guests, children, specialFood, foodAllergy }
    ) => {},

    //addRegistryItem will return user
    addRegistryItem: async (parent, { registryItem }, context) => {
      const regItem = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $set: { registryItem } },
        { new: true }
      );
      return regItem;
    },
  },
};

module.exports = resolvers;
