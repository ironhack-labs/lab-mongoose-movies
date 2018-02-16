const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongooseMovies");
const Celebrity = require("../models/Celebrity");

const celebrities = [
  {
    name: "Elon Musk",
    occupation: "Industrial/Technological Visionary",
    catchPhrase: "If you get up in the morning and think the future is going to be better, it is a bright day.",
  },
  {
    name: "Bill Gates",
    occupation: "Philanthopist",
    catchPhrase: "As we look ahead into the next century, leaders will be those who empower others."
  },
  {
    name: "Oprah Winfrey",
    occupation: "Cultural Influencer",
    catchPhrase: "The biggest adventure you can ever take is to live the life of your dreams."
  }
];

Celebrity.create(celebrities, function(err,result){
  if (err){
  console.log(err);
  } else{
  console.log("DATA SEEDED TO DB!", result);
  }
});