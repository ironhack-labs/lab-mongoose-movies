const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema({
  name: String,
  lastName: String,
  occupation: String,
  catchPhrase: String,
  pictureUrl: String,
  // add novas propriedades, e necessario declarar aqui, para criar a estrutura necessaria para gravar
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
