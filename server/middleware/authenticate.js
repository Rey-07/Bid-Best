const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    // Retrieve token from request cookies
    const token = req.cookies.jwtoken;

    if (!token) {
      throw new Error("Authentication token missing");
    }

    // Verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!verifyToken) {
      throw new Error("Token verification failed");
    }

    // Find user based on token information
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    // Store user information in request object
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    // Call next middleware
    next();
  } catch (error) {
    // Handle errors
    console.error("Authentication error:", error.message);
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = authenticate;
