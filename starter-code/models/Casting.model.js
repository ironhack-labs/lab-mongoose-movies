const mongoose = require('mongoose');

const castingSchema = mongoose.Schema( {
    movie: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Movie',
        required: true
    },
    celebrity: {
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Celebrity',
        required: true
    }
});

const Casting = mongoose.model('Casting', castingSchema);
module.exports = Casting;