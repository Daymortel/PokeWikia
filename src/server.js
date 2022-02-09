// modules imports
const express = require("express");
const app = express();

// external scripts imports
const configDB = require("./configDB");

// server settings
app.use(express.json());

// server launching
const port = 3467;
app.listen(port, () => console.log(`Server connected on port ${port}`));

// database launching
configDB();
