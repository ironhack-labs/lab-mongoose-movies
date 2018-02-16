const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongooseMovies");
const Celebrity = require("../models/Celebrity");

const celebrities = [
    {
        name:"Jennifer Aniston",
        occupation:"actriz",
        catchPhrase:"No confíes en los hombres, pero no rehuyas de ellos tampoco."
    },
    {
        name:"Sarah Jessica Parker",
        occupation:"actriz",
        catchPhrase:"prefiero vivir con un perro"
    },
    {
        name:"Katty Perry",
        occupation:"cantante",
        catchPhrase:"it's Friday night"
    }
]

Celebrity.create(celebrities, function(err, result){
    if(err) console.log("Nel",err);
    console.log("lo lograste", result);
});