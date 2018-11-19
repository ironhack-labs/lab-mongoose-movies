const mongoose = require ("mongoose");
const Celebrity = require ("../models/Celebrity");



mongoose
	.connect('mongodb://localhost/movies', {
		useNewUrlParser: true
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
	})
	.catch(err => {
		console.error('Error connecting to mongo', err)
  });
  
const celebrities = [
  {
    name: "Quentin Tarantino",
    occupation: "filmmaker",
    catchPhrase: "If you just love movies enough, you can make a good one.",
    image: "../public/images/quentin-tarantino-670x410.jpg",
  },
  {
    name: "Martin Scorsese",
    occupation: "filmmaker",
    catchPhrase: "I am the movies I've made.",
    image: "../public/images/Cine-Martin_Scorsese-Cine_302481649_75197508_1024x576.jpg",
  },
  {
    name: "David Fincher",
    occupation: "filmmaker",
    catchPhrase: "In film, we sculpt time, we sculpt behaviour and we sculpt light.",
    image: "../public/images/shutterstock_7531085d.jpg",
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});

Celebrity.insertMany(celebrities);