const env = require("../../../../apps/env.json");

const backPort: Number = 3002;
const frontPort: Number = 4002;

const urlFront: String = env.site + `:${frontPort}`;
const urlApi: String = env.site + `:${backPort}/api`;

const isServerDev: boolean = env.server === "local";

const ServerConfig: object = {
   isServerDev,
   backPort,
   frontPort,
   urlFront,
   urlApi
};

export default ServerConfig;
