const app = require("../app");
const celebritiesModel = require("../models/celebrity");

const listCelebrities = [
  {
    name: "Antonio Resines",
    occupation: "Actor",
    catchPhrase: "Te meto con la escobilla del vater!!"
  },
  {
    name: "Mariano Rajoy",
    occupation: "Comedian",
    catchPhrase: "Mucho españoles y muy españoles"
  },
  {
    name: "Jesulin de Ubrique",
    occupation: "Singer",
    catchPhrase: "Toa toa toa, te necesito toa"
  }
];

celebritiesModel
  .create(listCelebrities)
  .then(data => console.log("Data added", data))
  .catch(error => console.log("Couldn't add files", error));
