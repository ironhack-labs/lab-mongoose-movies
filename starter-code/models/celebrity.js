const mongoose = require("mongoose")
const Schema = mongoose.Schema


// iteracion 1 Crear Celebrity model  con schema y exportarlo

const celebritySchema = new Schema ({
    name: {
        type: String,
        required:true
    },

    occupation: {
        type: String,
        default:'desconocido'
    },

    catchPhrase: {
        type: String
    }

},{
    timestamps: true
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports= Celebrity