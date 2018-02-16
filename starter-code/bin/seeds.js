const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MongooseMovies");

const Celebrity = require("../models/Celebrity");


const celebrities = [
    {
        name:"Dalimitri",
        occupation:"CactusDesigner",
        catchPhrase:"Cactusize your life!"
    },
    {
        name:"Spiritri",
        occupation:"SpiritCurator",
        catchPhrase:"Don't take it personally"
    },
    {
        name:"Parmenitri",
        occupation:"Philosopher",
        catchPhrase:"Panta Rhei"
    }
   
]

Celebrity.collection.drop();
Celebrity.create(celebrities, function(err, result){
    if (err) console.log("Failll!");
    console.log("lo lograste!", result)
});

