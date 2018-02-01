const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbURL = ('mongodb://localhost/mongoose-movies');

mongoose.connect(dbURL).then(() => console.log("Conectadiño!"));


const celebrities = [
    {name:"Mr.Meeseeks",ocupation:"Helping people",catchPhrase:"I Mr.Meeseeks look at meeee!!!"},
    {name:"Marc",ocupation:"Hatting people",catchPhrase:"¿Qué devuelve una funcion sin return?"},
    {name:"Jesus Silva",ocupation:"Asking..asking a lot",catchPhrase:"Quiero ser fron-end."}
]

Celebrity.collection.drop();

celebrities.forEach(c =>{
    let cb = new Celebrity(c);
    cb.save((err,celeb) =>{
        if(err){
            throw err;
        }
        console.log(`Celebrity saved ${celeb.name}`);
    })
})