require ("../config/mongoose-setup");

//import the product model to do our product queries
const CelebrityModel = require ("../models/celebrity-model");

const celebrityInfo= [
  {
    name:"Snookie",
    occupation:"unknown",
    catchPhrase: "Let's smush"
  },

  {
    name:"Gretchen Weiner",
    occupation:"unknown",
    catchPhrase: "That's fetch"
  },
  {
    name:"Taylor Swift",
    occupation:"singer",
    catchPhrase: "Look what you made me do!"
  }
];


//db.products.insertMany(productInfo);
CelebrityModel.create(celebrityInfo)
  .then((celebrityResults)=>{
    console.log(`Inserted ${celebrityResults.length} celebrities`);
    console.log("SUCCESS!");
  })
  .catch((err)=>{
    console.log("celebrity insert error!");
    next(err);
  });//GET products
