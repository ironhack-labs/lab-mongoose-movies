const mongoose = require('mongoose');

const CelebrityModelMongoCall = require('../models/celebritymodelfile');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebritiesSeed = [
    {
    name: 'Simon',
    occupation: 'Federation Special Ops: Heavy Ordinance Independent Battallion',
    catchPhrase: 'I will break you.'
    },
    {
    name: 'Archer',
    occupation: 'Federation Special Ops: Orbital Defense Independent Battallion',
    catchPhrase: 'Land, sea, air, or space, my shot will find its place.'
    },
    {
    name: 'Mortar',
    occupation: 'Federation Dimension Force: Warp Force Independent Division',
    catchPhrase: "No one's faster than me. No one."
    }
];

CelebrityModelMongoCall.create(celebritiesSeed)
.then((result)=>{
  console.log(`created ${result.length} celebrities`)
  mongoose.disconnect();
})
.catch((err)=>{
  console.log(err);
})