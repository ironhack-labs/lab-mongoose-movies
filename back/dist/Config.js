"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = require("../../../../apps/env.json");
const backPort = 3002;
const frontPort = 4002;
const urlFront = env.site + `:${frontPort}`;
const urlApi = env.site + `:${backPort}/api`;
const isServerDev = env.server === "local";
const ServerConfig = {
    isServerDev,
    backPort,
    frontPort,
    urlFront,
    urlApi
};
exports.default = ServerConfig;
//# sourceMappingURL=Config.js.map