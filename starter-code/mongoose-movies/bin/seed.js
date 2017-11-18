require("../config/mongoose-setup");

const CelebrityModel = require("../models/celebrity-model");

const celebrityInfo = [
  {
  name: "Rachel McAdams",
  occupation: "Actress",
  catchPhrase: "Whatever, I'm getting cheese fries.",
  imageUrl: "https://media.giphy.com/media/aQGqcObSxfixy/giphy.gif"
  },
  {
  name: "Ryan Reynolds",
  occupation: "Actor",
  catchPhrase: "I don't expect success. I prepare for it.",
  imageUrl:"https://media.giphy.com/media/YTfbEV1O8seaY/giphy.gif"
  },
  {
  name: "Leonardo DiCaprio",
  occupation: "Environmental Activist",
  catchPhrase: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can’t achieve it.",
  imageUrl: "https://media.giphy.com/media/PtdOBG0BD9Vvi/giphy.gif"
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
