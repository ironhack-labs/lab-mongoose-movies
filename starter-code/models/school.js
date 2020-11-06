const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema(
  {
    house: String,
    colour: String,
    animal: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const School = mongoose.model("School", schoolSchema);

module.exports = School;
