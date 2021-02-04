require("../configs/db.config");
const mongoose = require("mongoose");
const faker = require("faker");

const Celebrity = require("../models/Celebrity.model")

const celebrities = [
    { name: 'Hyun Bin',
      occupation: 'Actor',
      catchPhrase: "The biggest effect it has on me is that it acts as a source of motivation. " 
    },
    { name: 'Lee Min Ho', 
      occupation: 'Actor', 
      catchPhrase: "One who wants to wear the crown, bears the crown." 
    },
    { name: 'Gong Yoo',
      occupation: 'Actor', 
      catchPhrase: "I don't know if this is because I'm a bit too old, but it is true that I'm getting insensible about romance recently." 
    },
    {
      name: faker.name.findName(),
      occupation: faker.name.jobTitle(), 
      catchPhrase: faker.company.catchPhrase()
    }
  ];


Celebrity.deleteMany()
.then( () => 
    Celebrity.create(celebrities)
    .then(celebrity => celebrity.forEach(celebrity => console.log(`New celebrity added: ${celebrity.name}`)))
        .then(() => {
            console.log('Mongoose conection close')
            mongoose.connection.close()
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error))
)
.catch(console.log('An error happened while saving a new celebrity'))