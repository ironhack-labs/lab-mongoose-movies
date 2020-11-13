//Create Celeb blueprint for objects in DB

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchphrase: String
});

module.exports = model ("Celebrity", celebritySchema)