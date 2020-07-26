//creamos el blueprint para cada celebritie que guardaremos en la DB

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
}, {
  //se tiene que poner siempre??
  //nos indica en el DB cuando se creó el objeto
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celibrity", celebritySchema);

module.exports = Celebrity;