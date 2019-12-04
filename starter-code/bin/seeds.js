const celebrities = [
  {
    name: "Jason Mraz",
    occupation: "Singer",
    catchPhrase:
      "I call it sacred geometry. When everything's just right and it feels really balanced, so that when it unfolds to the next part, you feel totally familiar and at ease within the song."
  },
  {
    name: "Iddo Goldberg",
    occupation: "Actor",
    catchPhrase:
      "Danny, you're dead! No. I've been living in London. Same thing."
  },
  {
    name: "Gillian Anderson",
    occupation: "Actress",
    catchPhrase:
      "Just remember, you can do anything you set your mind to, but it takes action, perseverance, and facing your fears."
  }
];

const movies = [
  {
    title: "13 Reasons Why",
    genre: "Teen drama",
    plot:
      "The series revolves around seventeen-year-old high school student, Clay Jensen, and his deceased friend Hannah Baker, who takes her own life after having to face a culture of gossip, bullying and sexual assault at her high school and a lack of support from her friends, her family and her school. A box of cassette tapes recorded by Hannah in the weeks preceding her suicide detail why she chose to end her life."
  },
  {
    title: "Black Mirror",
    genre: "Science fiction",
    plot:
      "Episodes are standalone, usually set in an alternative present or the near future, often with a dark and satirical tone, although some are more experimental and lighter."
  },
  {
    title: "Ozark",
    genre: "Crime drama",
    plot:
      "conomic advisor Martin 'Marty' Byrde suddenly relocates the family from the Chicago suburb of Naperville to the summer resort community of Osage Beach, Missouri, after a money laundering scheme goes wrong, and he must make amends to a Mexican drug cartel by setting up a bigger laundering operation in the Ozarks. When the Byrdes arrive in Missouri, they become entangled with local criminals including the Langmores and Snells."
  }
];

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongoose-project");

/** Insert Celebrity
const Celebrity = require("../models/Celebrity");

Celebrity.insertMany(celebrities)
  .then(docs => {
    console.log(`Success ${docs.length} celebrities were added`);
    mongoose.connection.close();
  })
.catch(err => console.log(err));
*/

const Movie = require("../models/Movie");

Movie.insertMany(movies)
  .then(docs => {
    console.log(`Success ${docs.length} movies were added`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
