const mongoose = require('mongoose')

const messageCountSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    guildId: {
        type: String,
        required: true
    },
    messageCount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('user-guild-metrics', messageCountSchema)