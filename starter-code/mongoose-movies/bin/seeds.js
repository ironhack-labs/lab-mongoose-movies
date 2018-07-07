const mongoose              = require('mongoose');
const Celebrity             = require('../models/celebrity');

const dbName                = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebsArray = [

{
    name:           'Celebrity One',
    occupation:     'Occupation One',
    catchPhrase:    'Catchphrase One'
},
{
    name:           'Celebrity Two',
    occupation:     'Occupation Two',
    catchPhrase:    'Catchphrase Two'
},
{
    name:           'Celebrity Three',
    occupation:     'Occupation Three',
    catchPhrase:    'Catchphrase Three'
}

];

Celebrity.create(celebsArray)
    .then((theArray)=>{

        console.log(`Created ${theArray.length} new celebrities.`);

    })
    .catch((err)=>{

        console.log(err);

    });