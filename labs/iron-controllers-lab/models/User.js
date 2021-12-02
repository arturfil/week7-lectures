const { model, Schema } = require('mongoose');

const UserSchema = Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        age: {
            type: Number
        }
    }
)

module.exports = model("User", UserSchema);