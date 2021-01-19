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

}, {
    timestamps: {
        createdAt: 'time_of_submission'
    }
})

const Voter = mongoose.model('Voter', voterScehma)

module.exports = Voter;