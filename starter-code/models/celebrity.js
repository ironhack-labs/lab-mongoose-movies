const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const celebritySchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        occupation: {
            type: String,
            enum: ['actor', 'singer', 'comedian', 'drama', 'unknown']
        }, 
        catchPhrase: {
            type: String
        }
    }
);

const celebrityModel = mongoose.model("celebrities", celebritySchema);

module.exports = celebrityModel;

