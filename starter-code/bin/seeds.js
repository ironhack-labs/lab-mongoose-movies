const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
mongoose.connect('mongodb://localhost/celebrities-dev', {useMongoClient:true});


const celebrities = [
    {
        name: 'Ronaldo',
        occupation:'Football Player',
        catchPhrase: 'Siiiiiiii'
    },
    {
        name: 'Emily Ratajkowski',
        occupation:'Model',
        catchPhrase:'Take me a photo',
    },
    {
        name: 'Valentino Rossi',
        occupation:'Motor Driver',
        catchPhrase:'Call me the Doctor',
    }
];

Celebrity.collection.drop();

celebrities.forEach( p => {
    let pr = new Celebrity(p);
    pr.save((err, celeb) =>{
        if(err) {
            throw err;
        }
        console.log(`Celebrity Saved ${celeb.name}`);
    })
});