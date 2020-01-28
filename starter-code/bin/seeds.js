require('dotenv').config();
const Celebrity = require("../models/celebrity");
const mongoose = require('mongoose');
const dbUrl = process.env.DBURL;

mongoose.connect(dbUrl);


const celebrities = [{
  name: "Rick Gervais",
  occupation: "Comedian",
  catchPhrase: "You can laugh at anything. It depends on the joke"
},
{
  name: "Woody Allen",
  occupation: "Filmmaker",
  catchPhrase: "I'm such a good lover because I practice a lot on my own"
},
{
  name: "Fiodor Dostoyevski",
  occupation: "Author",
  catchPhrase: "Pain and suffering are always inevitable for a large intelligence and a deep heart"
},
{
  name: "Thomas Mann",
  occupation: "Author",
  catchPhrase: "It is love, not reason, that is stronger than death"
},
{
  name: "Friedrich Nietzsche",
  occupation: "Philosopher",
  catchPhrase: "You must have chaos within you to give birth to a dancing star"
}];

async function seedDb() {
  try {
    await Celebrity.collection.drop(); 
    let celeb = await Celebrity.create(celebrities); 
    console.log(`SUCCESS Adding celebs to DB! ${celeb}`);
  } catch (error) {
    console.log(`ERROR ${error}`);
  }
  mongoose.connection.close();
};

seedDb();

