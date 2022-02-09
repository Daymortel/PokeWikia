const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const sha512 = require("sha512");
const sha256 = require("sha256");
const app = express();
const router = express.Router();
const Joi = require("joi");
const accounts = require("../models/accounts");
const validate = require("../validate");
const tokens = require("../tokens");

app.use(express.json());

router.post("/signup", async (req, res) => {
  const { mail } = req.body;

  // validate with joi
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // does the account already exists ?
  let userInfos = await accounts.findOne({ mail });
  if (userInfos) return res.status(400).send("User already exists");

  // if account doesn't exists, create account and generate token
  const account = new accounts({
    pseudo : req.body.pseudo,
    mail : req.body.mail,
    password : sha256(req.body.password)
  });

  await account.save();

  const token = jwt.sign({ id : accounts._id }, "secretKey");

  res.status(200).send({
    account,
    token
  });
});

module.exports = router;
