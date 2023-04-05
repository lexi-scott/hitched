const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `rsvp` in User.js
const rsvpSchema = new Schema({
    response: {
        type: Boolean,
        required: true,
    },
    guests:
    {
        type: Number,
        required: true,
    },
    children: {
        type: Number,
        required: true,
    },
    specialFood: {
        type: String,
    },
    foodAllergy: {
        type: String,
    }
});

module.exports = rsvpSchema;