const mongoose = require ("mongoose");
const CelebrityModel = require ("./../models/celebrity");

mongoose.connect("mongodb://localhost/starter-code") 
// {useNewUrlParser: true}).then(()=> {
//   console.log("connect to mongodb")
//   .catch((err)=> {
//     console.log(err);
//   });
// });


const celebrities = [
  {name: "Tom Cruise", occupation: "actor", catchPhrase: "Scientology is great !"},
  {name: "Beyonce", occupation: "singer", catchPhrase:"crazy in love !"},
  {name: "Britney Spears", occupation: "singer", catchPhrase:"oops I did it again !"}
];

// CelebrityModel.insertMany(celebrities).then(dbRes=> {
//   console.log(dbRes);
// })
// .catch(dbErr => {
//   console.log(dbErr)
// })