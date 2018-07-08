const mongoose = require("mongoose");
const Schema = mongoose.Schema;

celebSchema = new Schema({
    name: {typpe: String, required: true },
    occupation: {type: String, required: true },
    catchPhrase:{type: String, required: true}
}, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

    });

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;