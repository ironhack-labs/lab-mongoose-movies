  const mongoose = require('mongoose');
  const Celebrity = require('../models/celebrity.model');

  const dbName = 'lab-mongoose-movies';
  mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // Celebrity.collection.drop()


  const celebrities = [{
      name: "Mike Portnoy",
      occupation: "Drummer",
      catchPhrase: "I'd just like to be remembered as a huge music lover.",
    },
    {
      name: "Will Smith",
      occupation: "Actor",
      catchPhrase: "You can cry, ain't no shame in it.",
    },
    {
      name: "H.P.Lovecraft",
      occupation: "Novelist",
      catchPhrase: "The process of delving into the black abyss is to me the keenest form of fascination.",
    },
  ];


  Celebrity.create(celebrities, (err) => {
    if (err) {
      throw (err)
    }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });