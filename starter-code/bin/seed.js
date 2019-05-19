const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


const dbName = 'celebrity-model'
mongoose.connect(`mongodb://localhost/${dbName}`)

Celebrity.collection.drop()


const celebrities = [
    {
        name: "Grimes",
        occupation: "Artist",
        catchPhrase: "I'll evade the human race, putting makeup on my face",
    },
    {
        name: "La Zowie",
        occupation: "Artist",
        catchPhrase: "Salgo pa' la calle con los rulos / Leggins apretaos pa' que se marque el culo",
    },
    {
        name: "Yung Beef",
        occupation: "Artist",
        catchPhrase: "Aunque que no consiga nada / Mami, tuve mucha ambición / La calle está mala, / necesita medicación"
    },
]

const createCelebrities = celebrities.map(celebrity => {
    const newCelebrity = new Celebrity(celebrity)
    return newCelebrity.save()
      .then(celebrity => {
        return celebrity.name;
      })
      .catch(error => {
        throw new Error(`Impossible to add the author. ${error}`)
      })
  })

