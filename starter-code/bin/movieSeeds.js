const mongoose = require("mongoose");

function dbConnect(cb) {
  mongoose
    .connect("mongodb://localhost/celebrities", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(x => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });
}

dbConnect(() => {
  const movie = require("../models/movie");
  const movies = [
    {
      title: "Sharknado",
      picture:
        "http://www.masalladelhumor.com/wp-content/uploads/2013/07/sharknado.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/81GjKjGJy2L._SL1200_.jpg",
      genre: "Tiburones",
      plot:
        "Un gran huracán golpea Los Ángeles, causando inundaciones por toda la ciudad y tornados que escupen tiburones antropófagos. El surfista y propietario de un bar en el muelle de Santa Monica Fin (Ziering) acude con su amigo Baz (Jaason Simmons) y su camarera Nova (Cassie Scerbo) a rescatar a su exesposa April (Tara Reid) y a su hija adolescente Claudia (Aubrey Peeples). Después, Fin y April se dan cuenta de que su hijo mayor Matt (Chuck Hittinger) se encuentra en la escuela de vuelo, y quieren también rescatarlo. Más tarde tratarán de disipar tornados lanzando bombas desde un helicóptero para así evitar más muertes."
    },
    {
      title: "Sharknado 2",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/51veW4QSqmL.jpg",
      picture2:
        "https://brobible.files.wordpress.com/2018/03/sharknado-chainsaw-jump.jpg",
      genre: "Terror",
      plot:
        "Fin y los suyos se enfrentan nuevamente a un tornado de tiburones. Esta secuela estará ambientada en la ciudad de Nueva York y el punto de partida será el mismo: tiburones en tornados que llevan la devastación allá por donde pasan.“El tiempo desencadena la furia en Nueva York y libera una tormenta de tiburones sobre la población y sus sitios más icónicos, y solo Fin (Ian Ziering) y April (Tara Reid) pueden salvar a la gran manzana."
    },
    {
      title: "Sharknado 3",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDUzNzQzOF5BMl5BanBnXkFtZTgwMDg4NTYzNTE@._V1_.jpg",
      picture2: "https://i.ytimg.com/vi/HylLy2yEZUk/maxresdefault.jpg",
      genre: "Catástrofe",
      plot:
        "Sharknado 3 Oh Hell No! es una película de 2015 de género comedia/suspense. Trata sobre un tornado marino que levanta los tiburones de los océanos y los esparce por Washington, D.C y Orlando, Florida. pero la NASA cree que los extraterrestres están de alguna manera involucrados con los sharknados. Fue emitida en el canal Syfy de Estados Unidos el 22 de julio de 2015, protagonizada por Ian Ziering, Tara Reid, Cassie Scerbo, Ryan Newman, Jack Griffo y David Hasselhoff."
    },
    {
      title: "Sharknado 4",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/A1GFNq01LfL._SL1500_.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/81DbIK2pf2L._SL1200_.jpg",
      genre: "Ciencia Ficción",
      plot:
        "Cinco años después de que la Costa Este de Estados Unidos fuera devastada en Sharknado 3, Fin, su familia y el universo han estado felizmente libres de sharnados en los años intermedios, pero ahora los tiburones (¡y tornados!) se están multiplicando en los lugares (y formas) más insospechados. Como los sharknados vuelven con más fuerza que nunca, Fin Shepard (Ian Ziering) necesitará la ayuda de algunos nuevos amigos en su incansable lucha para proteger el mundo de la amenaza sharknádica."
    },
    {
      title: "Sharknado 5",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/81FNzzdOoJL._SY679_.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/81Rvvdnd7OL._SL1200_.jpg",
      genre: "Serie B",
      plot:
        "Con gran parte de Estados Unidos en ruinas, el resto del mundo espera un sharknado global. Fin (Ian Ziering) y su familia viajan por el mundo para evitarlo."
    },
    {
      title: "Torrente",
      picture:
        "https://torrente88.files.wordpress.com/2015/05/torrente-portada.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/71IBLSPeAmL._SL1123_.jpg",
      genre: "Policíaco",
      plot:
        "La historia cuenta las aventuras de José Luis Torrente, un policía machista, racista, franquista, zafio, aficionado a las prostitutas, bebedor, consumidor de un poco de droga tomada con rigurosa mesura según él, fan de El Fary, y fanático del equipo de fútbol Atlético de Madrid."
    },
    {
      title: "Torrente 2",
      picture:
        "https://cdn.wallapop.com/images/10420/74/y9/__/c10420p431580148/i1119986463.jpg",
      picture2:
        "https://cdn.wallapop.com/images/10420/74/y9/__/c10420p431580148/i1119984804.jpg",
      genre: "Acción",
      plot:
        "Tres años después de haber trincado 50 millones a los traficantes de Mendoza, el antihéroe José Luis Torrente, estando en Marbella, pierde la fortuna que había obtenido en un casino. Entonces se vuelve autónomo y crea su propia empresa en un piso de alquiler: una especie de agencia de detective privado y agencia de seguridad privada. En ella se forman jóvenes vecinos de la Costa del Sol, de los cuales Torrente se aprovecha. Entre ellos está Cuco (Gabino Diego), un conocido yonqui al cual Torrente intenta enderezar."
    },
    {
      title: "Torrente 3",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/51vK6RoYp%2BL.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/81kHZN31bTL._SL1500_.jpg",
      genre: "Suspense",
      plot:
        "La eurodiputada Giannina Ricci (Yvonne Sciò), famosa por su lucha contra las empresas contaminadoras, viene a España a denunciar públicamente a la multinacional Petronosa. La dirección de la empresa se siente inquietada ante la situación, así que soborna a algunos miembros de la policía para que la protección de la eurodiputada sea la peor posible, y ante lo cual estos deciden encargar a José Luis Torrente (Santiago Segura) la misión de proteger a Giannina, junto con un equipo de su propia elección."
    },
    {
      title: "Torrente 4",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/519xzl2qwWL.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/81JzZtIZP5L._SL1222_.jpg",
      genre: "Drama",
      plot:
        "Torrente (Santiago Segura) es invitado a una boda como vigilante de seguridad, donde chantajea a la novia (Maria Lapiedra) diciéndole que, si no practica el sexo con él, le dirá a su padre que le vio haciendo el amor con un camarero de la boda. En pleno acto, Torrente y uno de sus ayudantes descubren a un paparazi tras las cortinas, y empiezan a perseguirlo por toda la boda, ocasionando un gran desastre."
    },
    {
      title: "Torrente 5",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/81JdSIqDOZL._SL1500_.jpg",
      picture2:
        "https://images-na.ssl-images-amazon.com/images/I/71nVn31g0aL._AC_SX425_.jpg",
      genre: "Comedia",
      plot:
        "Año 2018. Torrente sale de la cárcel, y se encuentra aturdido ante una España convulsa y dividida. Debe encontrar respuestas en su interior para despejar su confusión, y por ello decide convertirse en un fuera de la ley. Así que se propone atracar un casino con una banda de incompetentes. A través de un contacto de su estancia en prisión, localiza a John Marshall, la persona que se ocupó de supervisar la seguridad cuando se planificó el principal casino-hotel de Eurovegas. Marshall, el más indicado para planificar un golpe, le explica la necesidad de organizar una banda de especialistas, que Torrente se encargará de reclutar entre sus contactos."
    }
  ];

  movie
    .deleteMany()
    .then(() => {
      return movie.create(movies);
    })

    .then(() => {
      console.log("succesfully added all the data");
      mongoose.connection.close();
      process.exit(0);
    });
});
