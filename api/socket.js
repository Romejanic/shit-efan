const { Server } = require("socket.io");

function readState(fan) {
    return new Promise((resolve, reject) => {
        fan.read((err, value) => {
            if(err) reject(err);
            else resolve(value === 1);
        });
    });
}

module.exports = async function createServer(server, fan) {
    const io = new Server(server);
    let fanState = await readState(fan);

    io.on("connection", (socket) => {

        // add handler for socket requesting to change the
        // fan state
        socket.on("switch", (state) => {
            if(fanState != state) {
                fan.write(state ? 1 : 0, (err) => {
                    if(err) {
                        socket.emit("error");
                    } else {
                        fanState = state;
                        io.emit("state", state);
                    }
                });
            }
        });

        // send state of fan upon connection
        socket.emit("state", fanState);

    });

};