const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const michael = 
{
    _id: new mongoose.Types.ObjectId(),
    name: "Michael Scott",
}

const cardi = 
{
    _id: new mongoose.Types.ObjectId(),
    name: "Cardi B"
}

const dwight = 
{
    _id: new mongoose.Types.ObjectId(),
    name: "Dwight Schrute"
}

const stars = [michael, cardi, dwight]


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


const Movie = require('../models/movie');

const movies = [
    {
        title: "Finding Nemo",
        genre: "Kids and Family",
        plot: "A fish named Nemo gets lost and has to find his way back home",
        celebrities: michael._id
    
    },
    {
        title: "Insidious",
        genre: "Horror",
        plot: "A couple's son experiences paranormal activity and gets stuck in a dream world/coma",
        celebrities: cardi._id
    },
    {
        title: "The Little Mermaid",
        genre: "Kids and Family",
        plot: "A mermaid gets her wish granted to become human",
        celebrities: dwight._id
    }

];


Celebrity.create(celebrities)
.then((result)=>{
    console.log(`created ${result.length} celebrities`)
    // mongoose.disconnect();
    Movie.create(movies)
    .then((result)=>{
    console.log(`created ${result.length} movies`)

}).catch((err)=>{
    console.log(err)
});

    // mongoose.disconnect();
}).catch((err)=>{
    console.log(err)
});