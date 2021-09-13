const { Schema, model } = require("mongoose");

const bandSchema = new Schema({

    name: {
        unique: true,
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
    },
    stream: {
        type: String,
    },

})

const Band = model("Band", bandSchema);
module.exports = Band;