const express = require('express');

const helmet = require("helmet");

const projectRouter = require('./project_router.js');
const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter);

server.get('/', (req, res) => {
res.status(200).json({message: "api is up"});
});

module.exports = server;
