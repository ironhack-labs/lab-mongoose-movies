const mongoose=require('mongoose');
// const Celebrity=require('../models/celebrity');
const Movie=require('../models/movie');

mongoose.connect(`mongodb://localhost/starter-code`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const movies=[
  {
    title:'Happy Movie',
    genre:'action',
    plot:'Very happy movie with alot of hapinees'
  },
  {
    title:'Sad Movie',
    genre:'drama',
    plot:'Sad movie made my cry' 
  },
  {
    title:'Boring Movie',
    genre:'thriller',
    plot:'Such a moring movie made me sleep'
  }
];
Movie.create(movies).then(()=>{
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close()
})
// const celebrities=[
//   {
//     name:'Arnold Schwarzenegger',
//     occupation:'actor',
//     catchPhrase:'Hasta la vista baby'
//   },
//   {
//     name:'Natalie Portman',
//     occupation:'actor',
//     catchPhrase:'Whatever'
//   },
//   {
//     name:'Jennifer Lawrence',
//     occupation:'actor',
//     catchPhrase:'Lets do it'
//   }
// ];

// Celebrity.create(celebrities).then(()=>{
//   console.log(`Created ${celebrities.length} celebrities`);
//   mongoose.connection.close()
// })