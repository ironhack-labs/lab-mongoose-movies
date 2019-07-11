'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require('./Config').default;
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(cors());
if (Config.isServerDev) {
    const logger = require('morgan');
    app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", function (req, res) {
    res.json({ "ope": "i´m back :)" });
});
const routerCeleb = require('./controller/celebridad/routerCelebridad');
app.use('/celebridad', routerCeleb);
const port = Config.backPort;
app.listen(port, () => {
    console.log(`app on port ${port}!`);
});
//# sourceMappingURL=server.js.map