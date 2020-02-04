const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

require('../config/db.config');
Celebrity.collection.drop();

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'American actor and film producer',
    catchPhrase:
      'Thomas Cruise (born Thomas Cruise Mapother IV; July 3, 1962) is an American actor and film producer. He has received several accolades for his work, including three Golden Globe Awards and nominations for three Academy Awards. Cruise is one of the best-paid actors in the world, and his films have grossed over $4 billion in North America and over $10.1 billion worldwide, making him one of the highest-grossing box-office stars of all time.',
  },
  {
    name: 'Johnny Depp',
    occupation: 'American actor, producer and musician.',
    catchPhrase:
      'John Christopher Depp II (born June 9, 1963) is an American actor, producer, and musician. He has been nominated for 10 Golden Globe Awards, winning one for Best Actor for his performance of the title role in Sweeney Todd: The Demon Barber of Fleet Street (2008), and has been nominated for three Academy Awards for Best Actor, among other accolades. He is regarded as one of the world.',
  },
  {
    name: 'Leonardo DiCaprio',
    occupation: 'American actor, producer, and environmentalist',
    catchPhrase:
      "Leonardo Wilhelm DiCaprio (born November 11, 1974) is an American actor, producer, and environmentalist. He has often played unconventional parts, particularly in biopics and period films. As of 2019, his films have earned US$7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors. His accolades include an Academy Award and three Golden Globe Awards.",
  },
];

Celebrity.create(celebrities)
  .then(cel => console.log(cel))
  .catch(err => console.log(`Cannot save the data ${err}`));
