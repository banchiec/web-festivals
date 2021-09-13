
const { Schema, model } = require("mongoose");

const commentSchema = new Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

const Comment = model("Comment", commentSchema);
module.exports = Comment;