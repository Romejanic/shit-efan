let socket = io();

const stateText = document.getElementById("state");
const onButton = document.getElementById("on-btn");
const offButton = document.getElementById("off-btn");
const fan = document.querySelector(".fan");

let currState;

function setState(state) {
    currState = state;
    stateText.innerText = state ? "ON" : "OFF";
    stateText.className = state ? "on" : "off";
    onButton.disabled = state;
    offButton.disabled = !state;
    fan.className = state ? "fan on" : "fan";
}

socket.on("state", (state) => {
    setState(state);
});

onButton.onclick = () => {
    socket.emit("switch", true);
};
offButton.onclick = () => {
    socket.emit("switch", false);
};
fan.onclick = () => {
    socket.emit("switch", !currState);
};