require("../config/mongoose-setup");


const CelebrityModel = require("../models/celebrity");

const celebrityInfo = [
    {
      name: "Samuel L. Jackson",
      occupation: "Actor",
      catchPhrase:"English motherf*cker, do you speak it?"
    },
    {
      name: "Seth Rogen",
      occupation: "Actor",
      catchPhrase: "Couscous, the food that's so nice, they named it twice"
    },
    {
      name: "Leonardo DiCaprio",
      occupation: "Actor",
      catchPhrase: "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can’t achieve it."
    }
];

CelebrityModel.create(celebrityInfo)
    .then((celebrityResults) => {
        console.log(`Inserted ${celebrityResults.length} celebrities`);
    })
    .catch((err) => {
      console.log("Product insert error!");
      console.log(err);
    });

    
