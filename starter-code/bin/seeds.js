const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name:  'Tomas Cruz',
        occupation:  'Actor',
        catch_phrase: 'Misión imposible'
    },
    {
        name:  'El perro',
        occupation:  'Comentarista',
        catch_phrase: 'Tiritititooooo!!!'
    },
    {
        name: 'Juan Nieves',
        occupation: 'Lord commander',
        catch_phrase: 'El invierno está llegando'
    }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});