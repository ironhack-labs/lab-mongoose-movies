const CelebrityModel = require('./../models/Celebrity');

const seedCelebrities =  [
    { name : "seed1", occupation: "seed1-ocupartion" , catchPhrase: "seed1-catch-phrase" },
    { name : "seed2", occupation: "seed2-ocupartion" , catchPhrase: "seed2-catch-phrase" },
    { name : "seed3", occupation: "seed3-ocupartion" , catchPhrase: "seed3-catch-phrase" }
]

CelebrityModel.insertMany(seedCelebrities)
.then((celebrities) => console.log(celebrities))
.catch((err) => console.log(err));