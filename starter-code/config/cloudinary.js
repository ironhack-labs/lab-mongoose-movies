const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const keys         = require('../key');
const multer = require('multer');


cloudinary.config({
  cloud_name:keys.cloud.name,
  api_key:keys.cloud.key,
  api_secret:keys.cloud.secret 
});

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'example-blah-folder', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;