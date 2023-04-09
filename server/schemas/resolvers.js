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
        me: async (parent, args, context) => {
            console.log(context);
            if (context.user) {
                console.log(context.user);
                return User.findOne({ _id: context.user._id }).populate("posts"); //.populate('savedBooks');
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        posts: async (parent, { userId }) => {
            return User.findOne({ _id: userId }, { posts: 1 }).populate("posts");
        },

        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            console.log("server adduser ", user);
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { content, postAuthor }) => {
            const newPost = await Post.create({ content, postAuthor });

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
                    runValidators: true,
                }
            );
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found with this email address");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
        //saveRsvp will return user
        saveRsvp: async (
            parent,
            { response, guests, children, specialFood, foodAllergy },
            context
        ) => { },

        //changeRsvp will return user
        changeRsvp: async (
            parent,
            { response, guests, children, specialFood, foodAllergy }
        ) => { },

        //addRegistryItem will return user
        addRegistryItem: async (parent, { registryItem }) => { },

    },
};

module.exports = resolvers;
