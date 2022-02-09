const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  pseudo : {
    type : String,
    minLength : 3,
    maxLength : 12,
    required : true,
    unique : true
  },
  mail : {
    type : String,
    minLength : 3,
    maxLength : 30,
    required : true,
    unique : true
  },
  password : {
    type : String,
    minLength : 8,
    maxLength : 1000,
    required : true
  }
});

const accounts = mongoose.model('accounts', schema);

module.exports = accounts;
