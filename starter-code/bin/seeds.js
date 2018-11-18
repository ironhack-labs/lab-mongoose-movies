const mongoose = require('mongoose');
const Celebrity = require('../public/Models/Celebrity');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name : 'Rick',
    occupation : 'Scientist',
    catchFrase  : 'wubba lubba dub dub',
  },
  {
    name : 'Morty',
    occupation : 'Grandkid',
    catchFrase  : 'Oh jeez',
  },
  {
    name : 'Summer',
    occupation : 'Grandkid',
    catchFrase  : 'Oh my god',
  },
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Added ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
