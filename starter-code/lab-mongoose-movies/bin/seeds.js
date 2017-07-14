const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDb')

const Celebrity = require('../models/celebrity');

const celebritiesSeeds = [
    {
        name: "John Doe",
        occupation: "Actor",
        catchPurchase: "Sayonara"
    },
    {
        name: "Clark Ken",
        occupation: "Super Hero",
        catchPurchase: "Superman"
    },
    {
        name: "Pacman",
        occupation: "Gamer",
        catchPurchase: "Game Over"
    }
];

Celebrity.create(celebritiesSeeds,(err,docs)=>{
    if(err){
        throw err;
    } else {
        docs.forEach((celebrity)=>{
            console.log(celebrity.name);
        })
    }
    mongoose.connection.close();
});


