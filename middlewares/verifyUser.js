const JWT = require("jsonwebtoken");

function verifyToken(request, response, next) {
  const token =
    request.cookies.access_token ||
    request.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return response.status(401).json({
      error:
        "There is account associated with this email address. Please signup!",
    });
  }

  JWT.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return response
        .status(403)
        .json({ error: "Failed to authenticate token" });
    }
    request.user = decoded;
    next();
  });
}

module.exports = verifyToken;
