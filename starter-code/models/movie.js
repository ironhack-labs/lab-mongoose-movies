const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchameName = new Schema({
  title: String,
  picture: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/I/A1LjxA19XlL._SL1500_.jpg"
  },
  picture2: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/I/A19rZoMThZL._SL1500_.jpg"
  },
  genre: String,
  plot: String
});

const Model = mongoose.model("Movie", SchameName);
module.exports = Model;
