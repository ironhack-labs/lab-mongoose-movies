require("../config/mongoose-setup");

const celebrityModel = require("../models/celebrities");


const celebrityInfo = [
  {
    name: "Arnold Schwarzenegger",
    ocupation: "Actor",
    catchPhrase: "I'll be back"
  },

  {
    name:"Keanu Reeves",
    ocupation: "Actor",
    catchPhrase: "Excellent!"
  },

  {
    name:"David Draiman",
    ocupation: "Singer",
    catchPhrase: "Get Down with the Sickness"
  }
];


celebrityModel.create(celebrityInfo)

.then((celebrityResults) => {

  console.log( `Inserted ${celebrityResults.length} celebrities`);

}).catch((err) => {

  console.log("Celebrity insert error");
  console.log(err);
});
