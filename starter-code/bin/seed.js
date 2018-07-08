const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: 'Mike Tyson',
        occupation: 'Boxer',
        catchPhrase: 'Im the biggest fighter in the history of the sport!'
    },
    {
        name: 'Floyd Mayweather',
        occupation: 'Boxer',
        catchPhrase: 'Money Team!'
    },
    {
        name: 'Muhammad Ali',
        occupation: 'Boxer',
        catchPhrase: 'Float like a butterfly, sting like a bee'
    }

]

Celebrity.create(celebrities)
.then((result)=>{
    console.log(`created ${result.length} celebrities`)
})
.catch((err)=>{
    console.log(err)
});