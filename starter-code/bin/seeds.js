const CelebrityModel = require("./../models/Celebrity");
require("./../app");

const celebrities = [
  {
    name: "Jessica Alba",
    occupation: "Actor",
    catchPhrase: "Hey I'am mum now!",
  },
  {
    name: "Beyonce",
    occupation: "Actor/Singer",
    catchPhrase: "Hey I'am the most beautiful woman in the world!",
  },
  {
    name: "Jay-Z",
    occupation: "Singer",
    catchPhrase:
      "Hey I'am the ugliest man who married the most beautiful woman!",
  },
];

CelebrityModel.insertMany(celebrities)
  .then((celebrities) => {
    celebrities.forEach((celebrities) => {
      console.log(celebrities.name);
    });
  })
  .catch((err) => {
    console.error(err);
  });
