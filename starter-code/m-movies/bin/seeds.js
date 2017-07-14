//Require and connect Mongoose to Mongodb instance (because our app is not yet running
//during initial seeding!)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');

//Pass (require) the model via which we will be seeding our documents
const Celebrity = require("../models/celebrity");

var celebsToSeed = [
    {
        name : "Kevin Spacey",
        occupation: "Actor",
        catchPhrase: "Knock knock"
    },
    {
        name : "Michael McIntyre",
        occupation: "Comedian",
        catchPhrase: "Hellooo!"
    },
    {
        name : "Mara Smith",
        occupation: "Actor",
        catchPhrase: "Who are you?!"
    }
];

//now we can finally CREATE the model into the db, but let's pass on the array of the items we have just created
Celebrity.create(celebsToSeed, (err, data)=>{
    //as always, through an error if needed!
    if(err){
        throw err;
    }
    //loop through the Docs(which should now include the array of seeded data.
    //Make sure you are looping through the Docs and not the array of items to be seeded!)
    //and console each and every one with a foreach
    celebsToSeed.forEach((element)=>{
        console.log(element);
    });
    //Don't leave the door open! Close your connect
    mongoose.connection.close();
});