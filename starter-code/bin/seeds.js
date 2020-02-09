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
  const celebrity = require("../models/celebrity");
  const celebrities = [
    {
      name: "Paco Porras",
      picture: "http://frikivision.es/img/paco_porras/porras2.jpg",
      picture2:
        "https://4.bp.blogspot.com/_A2ORS_oLgYY/SwzngAwhV3I/AAAAAAAAAAM/PfD1VJxsTYg/s320/jajajaja.jpg",
      occupation: "Curandero",
      catchPhrase: "Me ha dejado lisiado y se ha llevado el dinero"
    },
    {
      name: "La Bruja Lola",
      picture:
        "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/10/22/15717574779300.jpg",
      picture2:
        "https://www.cotilleo.es/wp-content/uploads/2017/03/Captura-de-pantalla-2017-03-15-a-las-0.24.32.png",
      occupation: "Pitonisa",
      catchPhrase: "Te vi a poner dos velas negras"
    },
    {
      name: "Tamara",
      picture:
        "https://www.cadenadial.com/wp-content/uploads/2015/11/mbtlqictos9dp9oamn4b4a852f59357_tamara-seisdedos.jpg",
      picture2:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Yurena1.jpg/270px-Yurena1.jpg",
      occupation: "Cantante",
      catchPhrase: "No cambié no cambié no cambié"
    },
    {
      name: "Leonardo Dantés",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Leonardo_Dant%C3%A9s.jpg",
      picture2:
        "https://www.elnacional.cat/enblau/uploads/s1/64/42/98/6/leonardo-dantes-gtres_1_630x630.jpeg",
      occupation: "Showman",
      catchPhrase: "Tiene nombres mil"
    },
    {
      name: "Padre Apeles",
      picture: "https://photos1.blogger.com/img/252/1707/640/padre_apeles.jpg",
      picture2:
        "https://hips.hearstapps.com/es.h-cdn.co/qmdes/images/noticias-famosos/padre-apeles-nueva-vida/padre_apeles_nuevavida_01/2264937-1-esl-ES/padre_apeles_nuevavida_01.jpg",
      occupation: "Sacerdote",
      catchPhrase: "Cada día me voy solo al cine y bebo sin parar"
    },
    {
      name: "Pocholo Martinez Bordiu",
      picture:
        "https://static.hoy.es/www/pre2017/multimedia/prensa/noticias/200912/28/fotos/1079999.jpg",
      picture2:
        "https://s5.eestatic.com/2018/10/05/corazon/famosos/Pocholo_Martinez-Bordiu-Fundacion_Francisco_Franco-Carmen_Martinez-Bordiu-Famosos_343227768_100202439_1024x576.jpg",
      occupation: "Vividor",
      catchPhrase: "Donde está mi mochila?"
    },
    {
      name: "Margarita Seis Dedos",
      picture: "https://pbs.twimg.com/media/Bu8XpAuIUAEhXTn.jpg",
      picture2: "https://pbs.twimg.com/media/DpEn7ogWwAEpAtA.jpg",
      occupation: "Madre coraje",
      catchPhrase: "Vete a tomar por culo"
    },
    {
      name: "Dinio",
      picture:
        "https://www.vozpopuli.com/2019/09/11/gritos/turbio-Dinio-Garcia-Marujita-Diaz_1281181947_14299554_1280x720.jpg",
      picture2:
        "https://ep00.epimg.net/cultura/imagenes/2015/06/23/actualidad/1435062312_319525_1435069244_noticia_normal.jpg",
      occupation: "Seductor",
      catchPhrase: "La noche me confunde"
    },
    {
      name: "El Dioni",
      picture:
        "https://cadenaser00.epimg.net/ser/imagenes/2009/07/09/cultura/1247095029_740215_0000000000_noticia_normal.jpg",
      picture2: "https://s03.s3c.es/imag/_v0/640x736/0/4/f/dioni-2.jpg",
      occupation: "Ladrón",
      catchPhrase: "Viendo cómo está España, volvería a robar el furgón"
    },
    {
      name: "Carmen de Mairena",
      picture:
        "https://www.clm24.es/media/clm24/images/2017/06/15/2017061515534339764.png",
      picture2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUP_mzF7KnsKtVLxPRpNUs4OdMzPTmfYa6N6mXvVfjaf02nPz2",
      occupation: "Popular Transexual",
      catchPhrase: "Soy una mujer completa, tengo polla y tengo tetas"
    },
    {
      name: "Yola Berrocal",
      picture:
        "https://www.bluper.es/bluper/sites/default/files/styles/portadon_home/public/noticias/2016-04-12/yola.jpg?itok=7-OwN6bv",
      picture2:
        "https://www.laregion.es/asset/zoomcrop%252C1366%252C800%252Ccenter%252Ccenter//media/laregion/images/2017/12/08/2017120823173045773.jpg",
      occupation: "Exnovia del padre Apeles",
      catchPhrase: "Soy un ejemplo de la fuga de cerebros"
    }
  ];

  celebrity
    .deleteMany()
    .then(() => {
      return celebrity.create(celebrities);
    })

    .then(() => {
      console.log("succesfully added all the data");
      mongoose.connection.close();
      process.exit(0);
    });
});
