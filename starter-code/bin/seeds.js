require("dotenv").config()
require("../app")
const Celebrity = require("../models/Celebrity.model")
const dataCelebrities = require("../dataCelebrities.json")

Celebrity.deleteMany()
    .then(() => {
        Celebrity.insertMany(dataCelebrities)
            .then((celebrity) => {
            console.log (celebrity)
        })
    })
    .catch((e) => console.log("Error", e))