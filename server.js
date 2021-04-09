//creating the server for socket.io
const express = require('express')
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = socket(server)
const socket = require("socket.io")

server.listen(4000, () => console.log("server is on port 4000"))