const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const sha512 = require("sha512");
const app = express();
const router = express.Router();
const Joi = require("joi");
const accounts = require("../models/accounts");
const validate = require("../accountsValidation");

app.use(express.json());

router.post("/signup", async (req, res) => {
  const { mail } = req.body;
});
