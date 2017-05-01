const mongoose = require('mongoose');

const useLater = require ('./review-model.js');

const Schema = mongoose.Schema;


const celebritySchema = new Schema({
  name: { type: String, required: [true, 'Please give the celebrity name.'] },
  ocupation: { type: String },
  catchPhrase: { type: String },
  profileImage: { type: String, default: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/11/princess-leia-frog-snails-photoshop-battle-38.jpg' },
  reviews: [ useLater.schema  ]
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);


module.exports = Celebrity;
