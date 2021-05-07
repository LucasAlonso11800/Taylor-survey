const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    favourite: {
        type: String,
        required: true
    },
    worst: {
        type: String,
        required: true
    },
    underrated: {
        type: String,
        required: true
    },
    friday: {
        type: String,
        required: true
    },
    sunday: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Answer', AnswerSchema);