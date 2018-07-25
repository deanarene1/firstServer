const http = require("http");

const PORT = 7000;
const PORTwo = 7500;

function handleRequest(request, response) {
    response.end ("Something Bad");
}

function handleRequestTwo(request, response) {
    response.end ("Something Good");
}

const server = http.createServer(handleRequest);
const serverTwo = http.createServer(handleRequestTwo);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

serverTwo.listen(PORTwo, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});