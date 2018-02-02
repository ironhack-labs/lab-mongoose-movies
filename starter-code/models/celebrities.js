const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
    name: {
        type: String,
        min: [3, 'Hey, por un nombre de más de 3 letras'],
        max: [20, 'Máx. 20 letras'],
        required: [true, 'Obligatorio, tronqui monqui']
    },
    occupation: {
        type: String,
        min: [3, 'Hey, por un nombre de más de 3 letras'],
        max: [20, 'Máx. 20 letras'],
        required: [true, 'Obligatorio, tronqui monqui']
    },
    catchPhrase: {
        type: String,
        min: [3, 'Hey, por un nombre de más de 3 letras'],
        max: [20, 'Máx. 20 letras'],
        required: [true, 'Obligatorio, tronqui monqui']
    }
});


const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;