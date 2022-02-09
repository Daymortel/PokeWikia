const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers['x-auth-token'];
  if (!token) res.status(400).send("No token provided");

  try {
    const tokenDecoded = jwt.verify(token, 'secretKey');
    req.user = tokenDecoded;
  } catch (err) {
    res.send(err.message);
  }
  next();
}
