const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');

// link celebrity
const Celebrity = require('../models/celebrity.js');

const celebrities = [
	{
		name: "Adam Sandler",
		occupation: "Comedian",
		catchPhrase: "My name is Adam Sandler. I'm not particularly talented. I'm not particularly good-looking. And yet I'm a multi-millionaire."
	},

	{
		name: "Dave Chappelle",
		occupation: "Comedian",
		catchPhrase: "I love being famous - it's phenomenal."
	},

	{
		name: "Jay Leno",
		occupation: "Talk Show Host",
		catchPhrase: "You're not famous until my mother has heard of you."
	}
];


 Celebrity.create(celebrities, (err, celebrities) => {
    if (err) {
        throw err;
    }

    celebrities.forEach((celebrity) => {
        console.log(celebrity.name);
    });
    mongoose.connection.close();
  });