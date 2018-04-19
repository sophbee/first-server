var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(request, response) {
    response.end("What's up, gf? You are looking fly today!");
}

function handleRequestTwo(request, response) {
    response.end("What's wrong? Turn that frown upside down!");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function () {
    console.log("Server listening on: http://localhost:" + PORTONE)
});

serverTwo.listen(PORTTWO, function () {
    console.log("Server listening on: http://localhost:" + PORTTWO)
});