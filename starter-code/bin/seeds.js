const mongoose = require("mongoose");
const faker = require("faker");

mongoose.connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {

    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}`)

  })


const Celebrities = require(`../models/Celebrity`)
const fakeCelebrity = Array(3)
  .fill()
  .map(() => {
    return {
      name: faker.name.findName(),
      occupation: faker.name.title(),
      catchPhrase: faker.lorem.sentence()
    };
  })

Celebrities.deleteMany()
  .then(() => {
    console.log(`Old data deleted`)
    return Celebrities.create(fakeCelebrity)
  })
  .then(() => {
    console.log(`Data created successfully`)
    mongoose.connection.close();
    process.exit(0)
  })