const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbtitle = "celebrities";
mongoose.connect(
  `mongodb://localhost/${dbtitle}`,
  { useNewUrlParser: true }
);

const celebrities = [
  {
    name: "Britney Spears",
    ocupation: "singer",
    catchPhrase: "hit me baby one more time"
  },
  {
    name: "Robert DeNiro",
    ocupation: "actor",
    catchPhrase: "you talkin to me"
  },
  {
    name: "Frida Kahlo",
    ocupation: "painter",
    catchPhrase: "i'm sad"
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
