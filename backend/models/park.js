const { Schema } = require('mongoose')

const Park = new Schema(
    {
        name: { type: String, required: true},
        description: { type: String, required: true },
        sections: [{ type: String, required: true }], // array
        topRides: [{ type: Schema.Types.ObjectId, ref: 'Ride' }], // array seeded from rides db
        topRestaurant: { type: String, required: true },
        waterPark: { type: Boolean, required: true }, // boolean
        serviceAnimalRelief: [{ type: String, required: true }], //array of relevant sections
        image: { type: String, required: true }
    }
)

module.exports = Park