const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/celebrity").then(() => console.log("conection"));
const Celebrity = require("../models/celebrity");



const celebrities =[{
    name:"Tom Cruise",
    occupation:"actor",
    catchPhrase:"mision imposible"
},
{
    name:"Beyonce",
    occupation:"singer",
    catchPhrase:"single ladies"
},
{
    name:"Cañita brava",
    occupation:"actor",
    catchPhrase:"Me debes 6000 pesetas whisky"
}
]
Celebrity.collection.drop();

celebrities.forEach(d => {
    let dr = new Celebrity(d);
    dr.save((err, celebrity) => {
        if (err) {
            throw err;
        }
        console.log(`celebrity guardada ${celebrity.name}`);
    })
})