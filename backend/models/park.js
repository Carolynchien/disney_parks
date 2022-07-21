const { Schema } = require('mongoose')

const Park = new Schema(
    {
        name: { type: String, required: true },
        dateOpened: { type: String, required: true },
        description: { type: String, required: true },
        sections: [{ type: String, required: false }], // array
        // topRides: [{ type: Schema.Types.ObjectId, ref: 'Ride' }], // array seeded from rides db
        topRestaurant: { type: String, required: false },
        waterPark: { type: Boolean, required: true }, // boolean
        serviceAnimalRelief: [{ type: String, required: false }], //array of relevant sections
        image: { type: String, required: false }
    }
)

module.exports = Park