const mongoose = require('mongoose');
const {Schema} = mongoose;

const HistorySchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    gameType: {
        type: String,
        required: true
    },
    betType: {
        type: String,
        required: true
    },
    digitType: {
        type: String,
        required: true
    },
    numbers: {
        type: String,
        required: true
    },
    multiple: {
        type: Number,
        required: true
    },
    bettingAmount: {
        type: Number,
        required: true,
    },
    winningAmount: {
        type: Number,
        required: true,
    },
    processed: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        required: true,
    },
    
});

HistorySchema.set('toJSON', {
    virtuals: true,
});

module.exports = History = mongoose.model("history", HistorySchema);