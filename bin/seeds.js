const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: "Michael Scott",
        occupation: 'Regional Manager of Dunder Mifflin',
        catchPhrase: 'Thats what she said'
    },
    {
        name: "Cardi B",
        occupation: "rapper",
        catchPhrase: "Okurrrrr"
    },
    {
        name: "Dwight Schrute",
        occupation: "Assistant to the Regional Manager",
        catchPhrase: "Beets, Bears, Battlestar galactica"
    }

];

Celebrity.create(celebrities)
.then((result)=>{
    console.log(`created ${result.length} celebrities`)
    // mongoose.disconnect();
}).catch((err)=>{
    console.log(err)
});