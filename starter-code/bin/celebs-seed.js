const
  mongoose = require(`mongoose`),
  Celeb = require(`../models/Celebrity`)
;
mongoose.connect(`mongodb://localhost/ironhack`, {useNewUrlParser: true});

const
  celebs = [
    {
      name: `Mao`,
      occupation: `actor`,
      catchPhrase: `'Great Scott!'`
    },
    {
      name: `Ady`,
      occupation: `singer`,
      catchPhrase: `'¿Tú qué sabes?'`
    },
    {
      name: `Winnie the Pooh`,
      occupation: `bear`,
      catchPhrase: `'Where's the honey?'`
    }
  ]
;

Celeb.create(celebs, err => {
  if (err) throw err;
  console.log(`${celebs.length} created`);
  mongoose.connection.close();
});