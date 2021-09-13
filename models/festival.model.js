const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const festivalSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    location: {
        required: true,
        type: {
            type: String
        },
        coordinates: [Number]
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    billboard: [{
        type: Schema.Types.ObjectId,
        ref: 'FestivalDate'
    }]
});

festivalSchema.index({ location: '2dsphere' })
const Festival = model("Festival", festivalSchema);
module.exports = Festival;