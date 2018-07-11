const ObjectId = require('mongoose').Types.ObjectId;

function isIdValid (req, res, next) {
  if (!ObjectId.isValid(req.params.id)) {
    console.log('id not valid');
    const err = new Error('ID not valid');
    return next(err);
  }
  next();
}

module.exports = isIdValid;
