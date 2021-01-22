const mongoose = require('mongoose');

const voterScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    vote_choice: {
        type: Boolean,
        required: true
    },
    time_of_submission: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Voter = mongoose.model('Voter', voterScehma)

module.exports = Voter;