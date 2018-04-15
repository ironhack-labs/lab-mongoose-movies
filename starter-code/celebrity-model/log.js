const path = require("path");
const app_name = require("./package.json").name;
const debugModule = require("debug");


const log = (logname) => {
    let logstr = `${app_name}:${path.basename(logname).split(".")[0]}`;
    return debugModule(logstr)
} 

module.exports = log;