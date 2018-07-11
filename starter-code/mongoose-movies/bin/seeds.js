// REQUIRING IN MONGOOSE

const mongoose              = require('mongoose');

// REQUIRING IN CELEBRITY CLASS FROM FILEPATH

const Celebrity             = require('../models/celebrity');

// REQUIRING IN MOVIE CLASS FROM FILEPATH

const Movie                = require('../models/movie');

// THIS COULD HAVE BEEN CONDENSED INTO A SINGLE LINE:
// MONGOOSE.CONNECT(`MONGODB://LOCALHOST/**NAME OF DB**).
// I GUESS DOING IT THIS WAY ALLOWS FOR CHANGING THE
// "DBNAME" VAR ON THE FLY IN A MORE READABLE WAY.

const dbName                = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${dbName}`);

const clooney              = {

    _id:            new mongoose.Types.ObjectId(),
    name:           'George Clooney',
    occupation:     'Actor',
    catchPhrase:    'Insert catchphrase',
    headshot:       'https://upload.wikimedia.org/wikipedia/commons/8/8d/George_Clooney_2016.jpg'

};

const schwartzman          = {

    _id:            new mongoose.Types.ObjectId(),
    name:           'Jason Schwartzman',
    occupation:     'Actor',
    catchPhrase:    'Insert catchphrase 2',
    headshot:       'https://m.media-amazon.com/images/M/MV5BMjAyNjY0NTgzNF5BMl5BanBnXkFtZTcwOTQ0ODk2Mw@@._V1_.jpg'

};

const celebs = [clooney, schwartzman];

const celebsArray = [

{
    name:           'Maiyim Bialik',
    occupation:     'Actress',
    catchPhrase:    'Maiyim Bialik Catchphrase',
    headshot:       'https://pbs.twimg.com/profile_images/822196051083808768/ZuIqS-lf_400x400.jpg'
},
{
    name:           'Ta-Nehisi Coates',
    occupation:     'Author',
    catchPhrase:    'Ta-Nehisi Coates catchphrase',
    headshot:       'https://upload.wikimedia.org/wikipedia/commons/0/0b/Ta-Nehisi_Coates.jpg'
},
{
    name:           'Cornel West',
    occupation:     'Academic',
    catchPhrase:    'Cornel West catchphrase',
    headshot:       'https://43ihfu4aarxi2wmx5m1zjrq9-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/img-cornell-west_233156117028-750x1000.jpg'
}
];


const moviesArray = [

{

    title:          'I Heart Huckabees',
    genre:          'Comedy',
    plot:           'Determined to solve the coincidence of seeing the same conspicuous stranger three times in a day, Albert hires a pair of existentialist detectives, who insist on spying on his everyday life while sharing their views on life and the nature of the universe.',
    poster:         'https://images-na.ssl-images-amazon.com/images/I/51o6Fc3sL-L.jpg',
    celebrities:    clooney._id

},

{

    title:          'Little Miss Sunshine',
    genre:          'Comedy',
    plot:           'A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.',
    poster:         'https://images-na.ssl-images-amazon.com/images/I/71buuw7oB1L._SL1071_.jpg',
    celebrities:    schwartzman._id

},

{

    title:          'Arrival',
    genre:          'Sci-Fi',
    plot:           'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecrafts land around the world.',
    poster:         'http://www.impawards.com/2016/posters/arrival_xlg.jpg',
    celebrities:    clooney._id

}

];

// CONSTRUCTOR CLASS HAS ITS (MONGOOSE) .CREATE METHOD CALLED, WITH THE
// ITEMS ARRAY AS THE ARGUMENT.

Celebrity.create(celebsArray)
    .then((createdCelebsArray)=>{

        console.log(`Created ${createdCelebsArray.length} new celebrities.`);

        Celebrity.create(celebs)
            .then((response)=>{

                console.log(`Created ${response.length} new celebrities.`)
                
                Movie.create(moviesArray)
                    .then((movies)=>{
    
                        console.log(`Created ${movies.length} new movies.`);
                        mongoose.disconnect();
    
                    })
                    .catch((err)=>{
    
                        next(err);


                    });
        

            });

    })
    .catch((err)=>{

        console.log(err);

    });