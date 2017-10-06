//require Mongoose
const mongoose = require('mongoose');
//Connect with mongoose method to localhose db
mongoose.connect('mongodb://localhost/celebs', {useMongoClient: true});
//require the models/celebrity file for the dummy celebs
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movies');

//The Dummy Celebs will be an array of objects

// const celebrities = [
//   {
//     name : 'Dan Le Batard',
//     occupation : 'Radio Anchor',
//     catchPhrase : "You don't get the shooooowwww....",
//     imageUrl: "https://coedmagazine.files.wordpress.com/2016/11/dan-le-batard-neck-brace-injury.jpg?quality=88&w=750&h=422"
//   },
//
//   {
//     name : "Bruce Springstein",
//     occupation: "Lead Singer for the E Street Band",
//     catchPhrase: "Baby we were born to run!",
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCrIRcwbc552blBnxwiAEZZD2lRGs0vimb6ITc0PiaEJSsqwZ"
//   },
//   {
//     name : "Jimbo Fisher",
//     occupation: "FSU Football Head Coach",
//     catchPhrase: "Damngummit",
//     imageUrl:"https://cdnph.upi.com/svc/sv/upi/4631479753956/2016/1/61cfecf6479767c4739116c4116da233/Jimbo-Fisher-leading-candidate-for-LSU-football-coaching-job-report.jpg"
//   }
// ];

const movies = [
{  name : "E Street Band Live Concert",
  plot : 'Live Musical Concert',
  genre: 'Musical'
},
{
    name: 'HBO Ballers',
    plot: 'Following Lives of Professional Football Players in Miami',
    genre: 'Sports'
  },
{
  name: 'Forrest Gump',
  plot: 'Follows an American Hero throughout his life.',
  genre: 'Drama'
}
];

Movie.create(movies, (err, docs)=>{
  if (err) {
    throw err;
  }
  docs.forEach((movies) => {
    console.log(movies.name)
  });
  mongoose.connection.close();
});
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//   docs.forEach((celebrities) =>{
// console.log(celebrities.name)
// });
// mongoose.connection.close();
// });
