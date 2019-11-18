const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`);
// Celebrity.collection.drop()

const celebrity = [{
    name: "Robert downey jr",
    occupation: "Actor",
    catchPhrase: "I love you 3000",
},
{
    name: "Maluma",
    occupation: "Singer",
    catchPhrase: "Felices los 4",
},
{
    name: "Jennifer Aniston",
    occupation: "Actress",
    catchPhrase: "There are no regrets in life, only lesson.",
}
]

Celebrity.create(celebrity, (err) => {
    if (err) {
        throw (err)
    } console.log(`Created ${celebrity.length} celebrities`)
    mongoose.connection.close()
})