
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const truckSchema = new Schema({
  name: String,
  driver: [String],
  image: String,
  year: Number,
  body: String,
  engine: String,
  transmission: String
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;
