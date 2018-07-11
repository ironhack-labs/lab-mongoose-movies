const mongoose = require('mongoose');

const MovieModelMongoCall = require('../models/moviemodelfile.js');
const Celebrity = require('../models/celebritymodelfile')

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const simon = {_id: new mongoose.Types.ObjectId(), name: "simon", occupation: 'Fed Special Ops: Heavy Ordinance', catchPhrase: 'I will break you'}
const archer = {_id: new mongoose.Types.ObjectId(), name: "archer", occupation: 'Fed Special Ops, Orbital Defense', catchPhrase: 'Targeted and firing'}
const mortar = {_id: new mongoose.Types.ObjectId(), name: "mortar", occupation: 'Fed Special Ops, Dimension Force', catchPhrase: 'No one is faster than me'}

const celebrities = [simon, archer, mortar]; 



const moviesSeed = [
{
  title: "Rebellion of V",
  genre: "Drama",
  plot: "Unhappy with the government of the Federation, young V forms a rebellion to attempt a coup.",
  celebrities: [mortar._id]
},

{
  title: "The First Great Dimensional War",
  genre: "Military",
  plot: "V's rebellion has grown large enough to challenge the Federation military. With the newly formed Empire declaring war on the Federation, all out conflict is the only solution now.",
  celebrities: [simon._id, mortar._id, archer._id]
},

{
  title: "The Second Great Dimensional War",
  genre: "Military",
  plot: "V died in the last war, but now there is a new V, and the empire is poised to strike.",
  celebrities: [simon._id, mortar._id, archer._id]
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