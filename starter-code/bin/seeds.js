const mongoose = require("mongoose");
const faker = require("faker");
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// db connection
function dbConnect(cb) {
    mongoose
        .connect("mongodb://localhost/celebrities", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(x => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
            cb();
        })
        .catch(err => {
            console.error("Error connecting to mongo", err);
        });
}



dbConnect(() => {
    // mongoose models import so we can CRUD the data
    const Celebrities = require("../models/celebrity");

    const fakeCelebrities = Array(6)
        .fill()
        .map(() => {
            const occupation = ["actor", "singer", "comedian"];
            return {
                name: faker.name.firstName(),
                occupation: occupation[randomInt(0, occupation.length - 1)],
                catchPhrase: 'faker.lorem'
            };
        });

    Celebrities.deleteMany()
        .then(() => {
            return Celebrities.create(fakeCelebrities);
        })

});