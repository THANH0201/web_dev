const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers.js");

// GET /users
router.get("/", getAllUsers);
// Apply auth middleware to all routes below
router.use(auth);
// POST /users
router.post("/", createUser);

// GET /users/:userrId
router.get("/:userId",getUserById );

// PUT /users/:userId
router.put("/:userId", updateUser);

// DELETE /users/:userrId
router.delete("/:userId", deleteUser);

module.exports = router;