const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrity = new Schema({
    name: String,
    occupation: String,
    catchphrase: String


}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updatedAt"
    }

})

const Celebrity = mongoose.model("Celebrity", celebrity);
module.exports = Celebrity;