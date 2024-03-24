const jwt = require("jsonwebtoken");

function verifyToken(request, response) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({ error: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
    if (error) {
      return response.status(403).json({ error: "Forbidden: Invalid token" });
    }
    request.user = decoded;
    response.status(200).json({ decoded });
  });
}

module.exports = verifyToken;
