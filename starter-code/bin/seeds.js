const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')

const dbName = 'celebrity-project'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const celebrities = [
  { name: 'Paris Hilton',
    ocuppation: 'Who knows!',
    catchPhrase: "That's hot"
  },
  { name: 'Donald Trump',
    ocuppation: 'President of the USA',
    catchPhrase: 'Fake news'
  },
  { name:'Oprah Winfrey',
    ocuppation: 'media executive,',
    catchPhrase: "Aha! moment"

  }
]

Celebrity.create(celebrities, (err) => {
  if (err) {throw(err)}
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})