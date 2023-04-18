const express = require("express");
const server = express();

server.get("/ping", (req, res) => {
    return res.json({"ping":"pong"});
});

server.use(express.json())

server.listen(process.env.PORT||4444, ()=> {
    console.log("Server On");
});
