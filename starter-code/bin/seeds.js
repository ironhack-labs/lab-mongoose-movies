require("dotenv").config();
require("./../app.js");
const CelebrityModel = require("../models/Celebrity");

const celebrity = [
    {
        name: "Pink",
        occupation: "Singer",
        catchPhrase: "Kanye West is the biggest piece of shit on earth. Quote Me",
    },
    {
        name: "Andy Dwyer",
        occupation: "Character in Parks and recreation",
        catchPhrase: "Just remember, every time you look up at the moon, I, too, will be looking at a moon. Not the same moon, obviously, That's impossible.",
    },
    {
        name: "Donna Meagle",
        occupation: "Character in Parks and recreation",
        catchPhrase: "Do I look like I drink water?",
    }
    
];
async function insertCelebrity(){
    try{
        await CelebrityModel.deleteMany(); //Empty the celebrity db collection
        const inserted = await CelebrityModel.insertMany(celebrity); //insert docs in db
        console.log(`seed celebrity done: ${inserted.length} document inserted! `);
    }
    catch(err){
        console.log(err);
    }
}
insertCelebrity();