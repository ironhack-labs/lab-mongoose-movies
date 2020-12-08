// const celebrityModel = require('./../models/celebrity');
const movieModel = require('./../models/movie');

const mongoose = require('mongoose');

// const celebrities = [
//     {
//         name:'Beyonce', 
//         occupation: 'singer',
//         catchPhrase: 'I am the queen of the world',
// },
// {
//     name:'Emma stone', 
//     occupation: 'actor',
//     catchPhrase: 'I am into grilled cheese.  Grilled cheese makes me feel beautiful!',
// },
// {
//     name:'Millie bobby brown', 
//     occupation: 'actor',
//     catchPhrase:  "I don't believe it!",
// }
// ];

const movies = [
    {
        title:'matrix 1', 
        genre: 'sf',
        plot: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    title:'matrix 2', 
        genre: 'sf',
        plot: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    title:'matrix 3', 
        genre: 'sf',
        plot: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}
];

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));


// celebrityModel.insertMany(celebrities).then((celebrities) => {
//     celebrities.forEach((celebritie) => {
//       console.log(celebritie);
//     });
// }).catch(err => {
//     console.log(err);
// });

movieModel.insertMany(movies).then((movies) => {
    movies.forEach((movie) => {
      console.log(movie);
    });
}).catch(err => {
    console.log(err);
});
  
  console.log("toto");