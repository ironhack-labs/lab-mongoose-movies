const mongoose = require("mongoose")
const Celebrity = require("../models/celebrities")



const dbtitle = 'movie-lab';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Celebrity.collection.drop();

const celebrities = [{
    name: "Steven Seagal",
    occupation: `"Man vs Food" backup host`,
    catchPhrase: "I'm not fat, I'm just bulking up",
    image: "https://api.time.com/wp-content/uploads/2016/08/stephen-seagal-belarus-carrot-watermelon.jpg",
  },
  {
    name: "Jean-Claude Van Damme",
    occupation: "Mortal Kombat contestant",
    catchPhrase: `"Una vaina loca" est une chanson merveilleuse`,
    image: "https://media1.giphy.com/media/XrkJRL5UniWPu/source.gif",
  },
  {
    name: "Mr. T",
    occupation: "A-Team lieutenant",
    catchPhrase: "I pity the fool!",
    image: "https://vignette.wikia.nocookie.net/rocky/images/d/dc/MrT.jpg/revision/latest/scale-to-width-down/340?cb=20121204171820",
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrities.length} celebrities of the highest caliber`)
  mongoose.connection.close();
});
