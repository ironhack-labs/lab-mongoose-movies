const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema(
  {
    name: String,
    occupation: { type: String, default: "unknown" },
    catchPhrase: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
