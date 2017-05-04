//the seeds file is a way to inject documents into the db
//this file will create 3 celebs that will be part of the the mongoose-movies DB

//the first thing we will need is mongoose so that we could interact with mongo

const mongoose = require('mongoose');

//then we will need to connect mongoose to a db
//this can't overwrite, it will use the db if it exist, or create a new one if not found
mongoose.connect('mongodb://localhost/mongoose-movies');

//we are going to require the model that we want to work with
const Celebs = require('../model/celebrity.js');

//this is an array of celebrities that we want to insert into db
//it has to follow the schema from the model
// name, occupation, catchPhrase, bio, movies celebImg

const celebsSeed = [

{
name: "Rick Sanchez",
occupation: "Scientist",
catchPhrase: "wubalubadubdub",
bio: `A scientist, inventor, arms salesman, and a grandpa extrodinaire.
      He has a very pessimistic worldview. He spends most of his time
      working in the garage in his daughters garage. He also enjoys
      interdimensional travel.`,
celebImg: "https://media4.giphy.com/media/QNDDOIJ3oTFYI/giphy.gif"
},

{
name: "Lucas Bros",
occupation: "Bros",
catchPhrase: "Vampire in Brooklyn is an undeniable classic",
bio: `Just a bunch of bros, hanging out. That decided to open a moving company
      somehow, they get themselves into weird situations, but it's part of the job.
      A bunch of 90s kids eating fruit loops, and stuff.`,
celebImg: "https://i.imgur.com/8ZWljxb.gif"
},

{
name: "Patrick Star",
occupation: "Starfish",
catchPhrase: "Is mayonnaise an instrument?",
bio: `Genius starfish posing as a dumbstarfish. He lives under the sea, and
      he likes to have a good time. He lives under a rock because he is a modest
      starfish, while his friend, the sponge, lives in a luxurious pineapple.`,
celebImg: "https://media1.giphy.com/media/l46CyJmS9KUbokzsI/giphy.gif"
}

];

//at this point of the seed file the documents are created and saved into the db
Celebs.create(celebsSeed, (err, celebDocs) => {
  if (err) {
    console.log('There was an error importing your celebrities');

  }
  //go throught all of the docs that we are creating and pass them to this loop
  celebDocs.forEach(( unCeleb ) => {
    console.log(`You have successfully added ${ unCeleb.name } ID# ${ unCeleb._id }`);

    //you want to close the connection to the db so that it doesn't hang on the process
    mongoose.connection.close();
  }); //end of the forEach loop
}); //end of the doc creation
