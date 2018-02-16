const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/celebrity");
const Celebrity = require("../models/Celebrity")

const celebrities = [
    {
        name:"Arnold Schwarzenegger",
        occupation:"Strongman",
        catchPhrase:"I'll be back, baby!",
    },
    {
        name:"Barack Obama",
        occupation:"Ex-President",
        catchPhrase:"Tell your Mama, vote Obama!",
    },
    {
        name:"Donald Trump",
        occupation:"Clown",
        catchPhrase:"Grab em by the pussy!",
    }
]

Celebrity.create(celebrities, function(err,result){
    if(err){
        console.log(err);
    }else{
    console.log("Data seeded to DB!", result)};
});

