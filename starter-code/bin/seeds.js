  const mongoose = require("mongoose");
  const Celebrity = require("../models/Celebrity");

  const dbName = "Dayly celebrity";
  mongoose.connect(`mongodb://localhost/${dbName}`);

  const celebrity = [
    {
      name: "Tony Stark",
      occupation: "avenger",
      catchPhrase:
        "agkwangjnjgesjrselievesjosmoksmmeklmvkesmvklsemvkslselkfmlesfesgoñesgij"
    },
    {
      name: "Lucius Crawford",
      occupation: "beeing invented",
      catchPhrase:
        "agkwangjnjgesjrselievesjosmoksmmeklmvkesmvklsemvkslselkfmlesfesgoñesgij"
    },
    {
      name: "Rovius Hiksong",
      occupation: "more invented",
      catchPhrase:
        "agkwangjnjgesjrselievesjosmoksmmeklmvkesmvklsemvkslselkfmlesfesgoñesgij"
    }
  ];

  Celebrity.create(celebrity)
    .then(celebrityCreated => {
      console.log(`Creados ${celebrityCreated.length} celebridades`);
      mongoose.connection.close();
    })
    .catch(err => console.log(`Hubo un error: ${err}`));
