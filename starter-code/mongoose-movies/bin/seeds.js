
const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

const dbName = 'celebrity-application';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [
{
  name: 'Fozzy Bear',
  occupation: 'Being a bear and teaching kids about bear things',
  catchphrase: 'Wakka Wakka',
},
{
  name:'Cookie Monster',
  occupation:'Eating cookies',
  catchphrase:'MMMMMM! Cookie Cookie Cookie!',
},
{
  name:'Kermit the Frog',
  occupation:'Being Kermit the Frog',
  catchphrase:'I am Kermit the Frog',
}
]


Celeb.create(celebrity)
.then((celebrity)=>{
  console.log(`Created ${celebrity.length} celebrities`)
})
.catch((err)=>{
  console.log(err)
})