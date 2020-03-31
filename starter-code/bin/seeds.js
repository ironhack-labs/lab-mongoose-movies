const mongoose = require("mongoose");
const Movie = require("../models/movie");
// const Celebrity = require("../models/celebrity");
mongoose.connect('mongodb://localhost/starter-code');

const movies = [{

    title : "Days of thunder",
    genre : "Action",
    plot : "Nascar bla bla bla"

},
{
    title : "Mission Impossible",
    genre : "Action",
    plot : "Tom Cruize is invencible  bla bla bla"
},
{
    title : "Terminator",
    genre : "Action",
    plot : "Robots No future bla bla bla"
}];
// const celebrities = [{

//     name : "Tom Cruize",
//     occupation : "Actor",
//     catchphrase : "Show me the money"
// },
// {
//     name : "Beyonce",
//     occupation : "Singer",
//     catchphrase : "The more successful i become, the more i need a men"
// },
// {
//     name : "Arnold Schwarzenegger",
//     occupation : "Actor",
//     catchphrase : "I'll be back!!!"
// }];

// Celebrity.create(celebrities, (error) => {
//     if(error){
//         throw(error);
//     }
//     console.log(`celebrities created : ${celebrities.length}`);
//     mongoose.connection.close();
// });
Movie.create(movies, (error) => {
    if(error){
        throw(error);
    }
    console.log(`movies created : ${movies.length}`);
    mongoose.connection.close();
});