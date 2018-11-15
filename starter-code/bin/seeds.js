const mongoose = require('mongoose');


mongoose.

connect('mongodb://localhost/Celebrity' , {useMongoClient: true})
.then(()=>{
    console.log('connected to Mongo!');
})
.catch((err)=>{
    console.log("Error connection to mongo", err);
})

const Movie = require('../models/Movie');



const MovieArray = [
    {
        title: "Raid",
        gengre: "action",
        plot: "Police officer trying to survive in a locked huge building"
    },
    {
        title: "Raid 2",
        gengre: "action",
        plot: "Police officer STILL trying to survive in a locked huge building"
    },
    {
        title: "Raid 2",
        gengre: "action",
        plot: "Police officer STILL ALIVE AND STILL trying to survive in a locked huge building"
    }

]

Movie.create(MovieArray)
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})








// const mongoose = require('mongoose');

// mongoose.
// connect('mongodb://localhost/Celebrity' , {useMongoClient: true})
// .then(()=>{
//     console.log('Connected to Mongo!')
// }).catch(err=>{
//     console.log('Error connection to mongo', err)
// });


// const Celebrity = require ('../models/celebrity');


// const CelebrityArray = [
//     {
//         name: "Cristiano Ronaldo",
//         occupation: "soccer player",
//         catchPhrase: "Why SO EZ??????"
//     },
//     {
//         name: "Jay-Z",
//         occupation: "singer",
//         catchPhrase: "I think they can get louder!" 
//     },
//     {
//         name: "Donald Trump",
//         occupation: "current president of USA",
//         catchPhrase: "Hey you! Outside of the wall!"
//     }
// ]

// Celebrity.create(CelebrityArray)
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })