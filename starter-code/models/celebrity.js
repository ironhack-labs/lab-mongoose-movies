const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchameName = new Schema({
  name: String,
  picture: {
    type: String,
    default:
      "https://i.promecal.es/IMG/2015/97ED79D2-EFB8-3E70-EDCFAF6A982BA507.JPG"
  },
  picture2: {
    type: String,
    default:
      "https://www.viuvalencia.com/netpublisher/minfo/imagenes/5215_JIrun6450.jpeg"
  },
  occupation: String,
  catchPhrase: String
});

const Model = mongoose.model("Celebrity", SchameName);
module.exports = Model;
