const mongoose = require("mongoose");



function dbConnect(cb) {
  mongoose
    .connect("mongodb://localhost/celebrities", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });

  const app_name = require('./package.json').name;
  const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

  const app = express();
}

dbConnect(() => {
  
  const celebrities = mongoose.model("Celebrity", celebSchema);
  const celebrities = [
    {
    name: "Chicote",
    occupation: "chef",
    catchPhrase: "Eres más guarro que la Potitos"
    },

    {
    name: "Luis Rodríguez Moya",
    occupation: "pilot",
    catchPhrase: "Trata de arrancarlo Carlos, trata de arrancarlo por Dios"
    },

    {
    name: "Chicote",
    occupation: "chef",
    catchPhrase: "Lo más importante que se puede hacer por vosotros es lo que vosotros podras hacer por vosotros"
    }

  ]

  Celebrities.deleteMany()
    .then(() => {
      return celebrities.create(celebrities);
    })
    .then(() => {
      console.log("succesfully added all the data");
      mongoose.connection.close();
      process.exit(0);
    });
});

