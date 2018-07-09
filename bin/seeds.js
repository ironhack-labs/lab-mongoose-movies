const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const dbName = 'mongooseMovies';

const celebrities = [
  {
    name: "J.K. Rowling",
    occupation: "celebrity, dumbledore, fame, funny",
    catchPhrase: "But Dumbledore says he doesn't care what they do as long as they don't take him off the Chocolate Frog cards.",
    img: "https://images.gr-assets.com/authors/1510435123p8/1077326.jpg"
  },
  {
    name: "Niall Horan",
    occupation: "celebrity, niall-horan, one-direction",
    catchPhrase: "I'd rather be called a boy and play with paper airplanes than be called a man and play with a girl's heart.",
    img: "https://images.gr-assets.com/authors/1346214255p8/6422638.jpg"
  },
  {
    name: "Jess C. Scott",
    occupation: "celebrity, celebrity-culture, celebrity-gossip, celebutard, dark-humor, fake, fake-people, faking, humor, hype, inner-beauty, kim-kardashian, mainstream-media, plastic, plastic-surgery, prettiness, pretty, real-beauty, shallow-appearances, ugliness",
    catchPhrase: "What's the whole point of being pretty on the outside when you’re so ugly on the inside?",
    img: "https://images.gr-assets.com/authors/1374157564p8/2980674.jpg"
  },
  {
    name: "Lady Gaga",
    occupation: "celebrity",
    catchPhrase: "I'm obsessively opposed to the typical.",
    img: "https://images.gr-assets.com/authors/1304697345p8/2945649.jpg"
  },
  {
    name: "Marilyn Monroe",
    occupation: "celebrity, obscurity",
    catchPhrase: "It’s better for the whole world to know you, even as a sex star, than never to be known at all.",
    img: "https://images.gr-assets.com/authors/1436929110p8/82952.jpg"
  },
  {
    name: "Sean Penn",
    occupation: "celebrity, faith, film, god, magazines, movies, spirituality, truth",
    catchPhrase: "When everything gets answered, it's fake.",
    img: "https://images.gr-assets.com/authors/1522075713p8/65163.jpg"
  }
];

const movies = [
  {
    title: "Black Panther",
    genre: "Accion",
    plot: "En Black Panther 3D SBS podremos ver a la historia de T’Challa quien, tras lo sucedido en “Capitán América: Civil War“, regresa a casa, a la nación de Wakanda, aislada y muy avanzada tecnológicamente, para ser proclamado Rey. Pero la reaparición de un viejo enemigo pone a prueba el temple de T’Challa como Rey y Black Panther ya que se ve arrastrado a un conflicto que pone en peligro todo el destino de Wakanda y del mundo."
  },
  {
    title: "Looper",
    genre: "Accion",
    plot: "Como en 2072 los asesinatos están terminantemente prohibidos, las víctimas son enviadas a través de una máquina del tiempo al pasado (2042), donde los Loopers, un grupo de asesinos a sueldo, se encargan de eliminarlas y deshacerse rápidamente de sus cuerpos. El problema surge cuando Joe (Gordon-Levitt), uno de los Loopers, recibe desde el futuro un encargo muy especial: eliminarse a sí mismo (Bruce Willis)."
  },
  {
    title: "Radius",
    genre: "Ciencia Ficcion",
    plot: "Un hombre con amnesia se despierta en una carretera perdida, asimismo. al poco se percata de que todo ser vivo que se acerca a él cae muerto de manera fulminante. Al poco conoce a una mujer que como él no recuerda nada pero que anula ese terrible poder mientras ambos permanezcan juntos"
  },
  {
    title: "Mazinger Z: Infinity",
    genre: "Ciencia Ficcion",
    plot: "Cuando el malvado Doctor Hell ataca la Tierra, el poderoso robot gigante Mazinger Z se decide a detenerlo en la historia conocida como Mazinger Z: Infinity (2017) HD 1080p y 720p Castellano que así mismo se basa en el manga desarrollado por Go Nagai."
  }
];

mongoose.connect(`mongodb://localhost/${dbName}`);
Celebrity.collection.drop();
Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Insertados: ${celebrities.length} celebridades`);
  mongoose.connection.close();
});

mongoose.connect(`mongodb://localhost/${dbName}`);
Movie.collection.drop();
Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Insertados: ${movies.length} peliculas`);
  mongoose.connection.close();
});
