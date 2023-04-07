const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username })//.populate('savedBooks');
        },
        me: async (parent, args, context) => {

            if (context.user) {


                return User.findOne({ _id: context.user._id })//.populate('savedBooks');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            console.log("server adduser ", user);
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        //saveRsvp will return user
        saveRsvp: async (parent, { response, guests, children, specialFood, foodAllergy }) => {

        },

        //changeRsvp will return user
        changeRsvp: async (parent, { response, guests, children, specialFood, foodAllergy }) => {

        },

        //addRegistryItem will return user
        addRegistryItem: async (parent, { registryItem }) => {

        },

        //addPost will return user
        addPost: async (parent, { postId, author, content }) => {

        },

        //addComment will return post
        addComment: async (parent, { commentText, author, postId}) => {

        }

    }

};

module.exports = resolvers;
