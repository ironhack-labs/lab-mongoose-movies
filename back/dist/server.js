'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.json({ "ope": "i´m back :)" });
});
const port = 3006;
app.listen(port, () => console.log(`app on port ${port}!`));
//# sourceMappingURL=server.js.map