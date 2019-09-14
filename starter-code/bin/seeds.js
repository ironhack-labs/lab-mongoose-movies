const mongoose = require("mongoose");
const Celebritys = require("../models/Celebritys");

mongoose
.connect('mongodb://localhost/celebritys', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  start();

})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

function start() {
  Celebritys.deleteMany()
    .then(deleted => {
      return Celebritys.deleteMany();
    })
    .then(CelebritysDroppedInfo => {
      Celebritys.create([
        {
          name : "Katharine Hepburn",
          occupation: "Actriz",
          catchPhrase: "Si hubiera seguido todas las reglas, no hubiera llegado a ninguna parte"
        },
        {
          name : "Vivien Leigh",
          occupation: "Actriz",
          catchPhrase: "La vida es demasiado corta para trabajar tan duro"
        },
        {
          name : "Elizabeth Taylor",
          occupation: "Actriz",
          catchPhrase: "Las ideas mueven el mundo solo si antes se han transformado en sentimientos"
        }
      ])
        .catch(error => {
          console.log(error);
        });
    });
}
