
const { Schema, model } = require("mongoose");

const festivalDateSchema = new Schema({


    date: {
        type: Date,
        required: true
    },
    price: {
        type: String
    },
    band_id: [{
        type: Schema.Types.ObjectId,
        ref: 'festivalDate'
    }]

})

const FestivalDate = model("festivalDate", festivalDateSchema);
module.exports = FestivalDate;