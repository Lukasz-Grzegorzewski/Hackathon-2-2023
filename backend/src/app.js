const express = require("express");
// const fs = require("fs");
const path = require("path");
const cors = require("cors");
const router = require("./router");

const app = express();

// use some application-level middlewares
app.use(cors());

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use(router);

// ready to export
module.exports = app;
