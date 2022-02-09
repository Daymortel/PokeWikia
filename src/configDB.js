const mongoose = require("mongoose")

module.exports = async () => {
  const urlDB = "mongodb+srv://daymortel:dev@cluster0.knazk.mongodb.net/pokewikia?retryWrites=true&w=majority";
  const portDB = 3306

  try {
    await mongoose.connect(urlDB);
    console.log(`Database connected to port ${portDB}`);
  } catch (err) {
    console.log(err);
  }
};
