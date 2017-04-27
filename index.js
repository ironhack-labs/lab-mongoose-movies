const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/examplecats');

// Creating the Cat model
const Cat = mongoose.model('Cat', {
  name: String,
});

const kitty2 = new Cat({
  name: 'Kissen2',
});

console.log(kitty2);




kitty2.save(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Saved to database!');
  }
});


Cat.find({}, (err, cats) => {
  console.log('cats', cats);
});
