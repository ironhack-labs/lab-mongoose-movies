const celebrities = [{
    name: "T. Hanks",
    occupation: "Actor",
    catchPhrase: "I am Forrest Gump"
},
{
    name: "Mel Gibson",
    occupation: "Director",
    catchPhrase: "I was Braveheart"
},
{
    name: "Van Basten",
    occupation: "God",
    catchPhrase: "I was a footballer"
}
];

const Celebrity = require('../models/celebrity');

Celebrity.insertMany(celebrities).then(celebrity => {
  console.log(`Filled the database with ${celebrity}`);
  mongoose.disconnect();
});