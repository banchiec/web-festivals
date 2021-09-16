
const { Schema, model } = require("mongoose");

const festivalDateSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    price: {
        type: Number
    },
    band_id: [{
        type: Schema.Types.ObjectId,
        ref: 'Band'
    }],
})

const FestivalDate = model("FestivalDate", festivalDateSchema);
module.exports = FestivalDate;