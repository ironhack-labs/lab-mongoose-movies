//chama conexão do banco
require('../config/db.config');
//arquivo a ser inserido no bd
const CelebritiesData = require('../data/celebrity.data');
//chamar o schema que eu vou inserir o arquivo
const CelebrityModel = require('../model/Celebrity.model');


CelebrityModel.insertMany(CelebritiesData)
  .then(() => console.log('add celebrities!!'));