// modules imports
const express = require("express");
const router = express.Router();
const app = express();

// external scripts imports
const configDB = require("./configDB");
const signup = require("./routes/signup");

// server settings
app.use(express.json());
app.use("", signup);

// server launching
const port = 3467;
app.listen(port, () => console.log(`Server connected on port ${port}`));

// database launching
configDB();
