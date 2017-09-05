const mongoose = require('mongoose');
const DbzModel = require('../models/dbz_characters.js');

mongoose.connect('mongodb://localhost/dbzCharacters');

const dbzCharacters = [
  {
  name        : 'Piccolo',
  species     : 'Namekian',
  imgUrl      : 'https://vignette.wikia.nocookie.net/dragonball/images/7/7d/PiccoloKingKaisPlanetNV.png/revision/latest/scale-to-width-down/180?cb=20100509160111',
  powerLevel  : '12000',
  catchPhrase : 'DODGE!'
},
{
name        : 'Future Trunks',
species     : 'Earthling/Saiyan hybrid',
imgUrl      : 'https://vignette.wikia.nocookie.net/dragonball/images/e/ef/FutureTrunksFreeTheFuture.png/revision/latest/scale-to-width-down/180?cb=20120308013904',
powerLevel  : '121000',
catchPhrase : 'There\'s only two androids, I swear.'
},
{
name        : 'Cell',
species     : 'Bio-Android',
imgUrl      : 'https://vignette.wikia.nocookie.net/dragonball/images/9/9b/CellSemiPerfect01.png/revision/latest/scale-to-width-down/170?cb=20100307191833',
powerLevel  : '1211000',
catchPhrase : 'Bitch, I drink people.'
}
];

DbzModel.create(
  // 1st arguement -> array of characters to save
  dbzCharacters,

  // 2nd arguemtn -> callback
  (err, charactersAfterSave)=>{
    if(err){
      console.log('Create Error, poop');
      console.log(err);
      return;
    }
      charactersAfterSave.forEach((oneDbz)=>{
        console.log('New Character ---->' + oneDbz.name);
      });
  }
);
