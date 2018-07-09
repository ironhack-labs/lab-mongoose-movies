const mongoose = require('mongoose');

const MovieModelMongoCall = require('../models/moviemodelfile.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const moviesSeed = [
{
  title: "Rebellion of V",
  genre: "Drama",
  plot: "Unhappy with the government of the Federation, young V forms a rebellion to attempt a coup."
},

{
  title: "The First Great Dimensional War",
  genre: "Military",
  plot: "V's rebellion has grown large enough to challenge the Federation military. With the newly formed Empire declaring war on the Federation, all out conflict is the only solution now."
},

{
  title: "The Second Great Dimensional War",
  genre: "Military",
  plot: "V died in the last war, but now there is a new V, and the empire is poised to strike."
}
]


MovieModelMongoCall.create(moviesSeed)
.then((result)=>{
  console.log(`created ${result.length} movies`)
  mongoose.disconnect();
})
.catch((err)=>{
  console.log(err);
})