const mongoose              = require('mongoose');
const Celebrity             = require('../models/celebrity');
const Movie                = require('../models/movie');

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


const moviesArray = [

{

    title:          'I Heart Huckabees',
    genre:          'Comedy',
    plot:           'Determined to solve the coincidence of seeing the same conspicuous stranger three times in a day, Albert hires a pair of existentialist detectives, who insist on spying on his everyday life while sharing their views on life and the nature of the universe.',
    poster:         'https://images-na.ssl-images-amazon.com/images/I/51o6Fc3sL-L.jpg'

},

{

    title:          'Little Miss Sunshine',
    genre:          'Comedy',
    plot:           'A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.',
    poster:         'https://images-na.ssl-images-amazon.com/images/I/71buuw7oB1L._SL1071_.jpg'

},

{

    title:          'Arrival',
    genre:          'Sci-Fi',
    plot:           'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecrafts land around the world.',
    poster:         'http://www.impawards.com/2016/posters/arrival_xlg.jpg'

}

];

Movie.create(moviesArray)
    .then((theArray)=>{

        console.log(`Created ${theArray.length} new movies.`);

    })
    .catch((err)=>{

        console.log(err);

    });