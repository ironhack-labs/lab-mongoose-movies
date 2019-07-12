const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const uploadSchema = new Schema({

  imgName: String,
  description: String,
  imgPath: String
  
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

let UploadPhoto = mongoose.model("imageUpload", uploadSchema);
module.exports = UploadPhoto;
