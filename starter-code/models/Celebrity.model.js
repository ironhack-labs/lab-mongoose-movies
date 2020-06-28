const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
        type: String
    },
    ocupation: {
        type: String
    },
    catchPharse: {
        type: String
    }
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)
//console.log('esto es el modelo celebrity', { Celebrity})

module.exports = Celebrity