const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

   console.log(authorization);
   console.log(authorization.split(" "));
   console.log(authorization.split(" ")[0]);
   console.log(authorization.split(" ")[1]);

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    // Finds the User document whose _id matches the decoded token's _id.
    //.select("_id") ensures only the _id field is returned (no password, email, etc.).
    //The found document is then assigned to req.user. Downstream controllers can use req.user._id to scope queries.
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
