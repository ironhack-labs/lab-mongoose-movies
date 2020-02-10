const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
//second object is the objext with the options
const celebSchema = new Schema ({
    name: {type: String, required:true, unique:true},
    occupation: String,
    catchPhrase: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }  
})

//create model

const Celebrety = mongoose.model("Celebrety", celebSchema)

// export model

module.exports = Celebrety;