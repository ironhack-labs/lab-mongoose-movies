const celebrities = [{
  name:"Jennifer lopez",
  occupation:"actress",
  catchPhrase: "Always remember. You will live. You will love. You will dance again."
},
{
  name:"Jonney Depp",
  occupation:"actor",
  catchPhrase: "I think the thing to do is enjoy the ride while you’re on it."
},
{
  name:"Christiano ronaldo",
  occupation:"soccor player",
  catchPhrase: "I'm living a dream I never want to wake up from."
}]

require("dotenv").config();
require("./../config/mongo");
const CelebrityModel = require("./../model/Celebrity")

CelebrityModel.create(celebrities)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})