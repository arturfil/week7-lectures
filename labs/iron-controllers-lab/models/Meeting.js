const { model, Schema } = require('mongoose');

const MeetingSchema = Schema({
    name: {
        type: String
    },
    date: {
        type: Date
    },
    users: {
        type: [],
        ref: "User"
    }
});

module.exports = model("Meeting", MeetingSchema);