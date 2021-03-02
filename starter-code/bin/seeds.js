require("dotenv").config();
const CelebrityModel = require("./../models/celebrity");

const celebrities = [
  {
    "name": "Sarah Parker",
    "occupation": "Actress",
    "catchPhrase": "I'm looking for love",
  },
  {
    "name": "Steve Carell",
    "occupation": "Actor",
    "catchPhrase": "That's what she said",
  },
  {
    "name": "Johnny depp",
    "occupation": "Actor",
    "catchPhrase": "Laugh as much as you breathe and love as long as you live",
  }
];
CelebrityModel.create(celebrities)
.then(dbSuccess => {
    console.log(dbSuccess);
}).catch(dbError => {
    console.log(dbError);
})
