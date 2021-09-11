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
    ciudad: {
        type: String,
        required: true
    },
    Pais: {
        type: String,
        required: true
    },
    cartelera: {
        type: String,
        fecha_id: {
            type: Schema.Types.ObjectId,
            ref: 'festivalDate'
        }
    }
});

festivalSchema.index({ location: '2dsphere' })
const Festival = model("Festival", festivalSchema);
module.exports = Festival;