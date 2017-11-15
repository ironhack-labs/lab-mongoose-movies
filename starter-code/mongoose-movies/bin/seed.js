require("../config/mongoose-setup");

// import the product model to do product queries
const CelebrityModel = require("../models/celebrity");


const celebrityInfo = [
  {
  name: "Rachel McAdams",
  occupation: "Actress",
  catchPhrase: "Whatever, I'm getting cheese fries."
  },
  {
  name: "Ryan Reynolds",
  occupation: "Actor",
  catchPhrase: "I don't expect success. I prepare for it."
  },
  {
  name: "Leonardo DiCaprio",
  occupation: "Environmental Activist",
  catchPhrase: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can’t achieve it."
  }
];

CelebrityModel.create(celebrityInfo)
  .then( (celebrityResults) => {
      console.log(`Inserted ${celebrityResults.length} celebrities`);
  })
  .catch((err) => {
    console.log("Celebrity insert error!");
    console.log(err);
  });
