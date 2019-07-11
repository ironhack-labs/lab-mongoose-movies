"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Config = require('./Config').default;
const url = Config.urlMongoServer;
const dbName = "lab_celebs";
/* ************************************************ */
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
const cx = mongoose.connect(url + "/" + dbName, { useNewUrlParser: true });
const CelebridadModel = require("./CelebridadModel");
exports.default = {
    cx,
    CelebridadModel
};
//# sourceMappingURL=DBLabCelebs.js.map