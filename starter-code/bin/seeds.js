const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const DB_NAME = 'celebrities';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const celebrities = [

{name: 'Madonna',
occupation: 'Singer',
catchPhrase: 'Like the very first time'
},
{name: 'George Clooney',
occupation: 'Actor',
catchPhrase: 'I like it'
},
{name: 'Trump',
occupation: 'President',
catchPhrase: 'Just great'
}
]


Celebrity.create(celebrities,(feedback) => {

  console.log(feedback)

  mongoose.connection.close()
}) 
