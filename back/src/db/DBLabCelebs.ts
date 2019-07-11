const mongoose = require("mongoose");

const Config = require('./Config').default;


const url: string = Config.urlMongoServer;

const dbName :string ="lab_celebs";

/* ************************************************ */


mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

const cx = mongoose.connect(url + "/" + dbName, {useNewUrlParser: true});

const CelebridadModel = require("./CelebridadModel");

export default {
   cx,
   CelebridadModel
}
