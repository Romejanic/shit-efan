const { Gpio } = require("onoff");
const express  = require("express");
const http = require("http");
const config = require("./config.json");

let fan = new Gpio(config.pin, "out");
let app = express();
let server = http.createServer(app);

// serve static files
app.use(express.static("static"));

// register endpoints
const endpoints = require("./api/endpoints")(fan);
app.get("/api/on", endpoints.on);
app.get("/api/off", endpoints.off);
app.get("/api/state", endpoints.state);

// add socket server
require("./api/socket")(server, fan);

// listen for requests
server.listen(80, () => {
    console.log("Server listening on port 80");
});
