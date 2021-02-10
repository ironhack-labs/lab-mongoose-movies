const mongoose = require('mongoose');

const celebritySchema = mongoose.Schema(
   {
        name: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        }
    },{
        toJSON: { // para mandar a la vista
            virtuals: true
        },
        toObject: { // para console.log
            virtuals: true 
        }
    }
)

celebritySchema.virtual('castings', {
    ref: 'Casting',
    foreignField: 'celebrity',
    localField: '_id',
    justOne: false
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;