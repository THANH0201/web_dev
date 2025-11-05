const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  res.json({ users: User.getAll() });
};

// POST /users
const createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Missing request body" });
  }

  const newUser = User.addOne(req.body);
  if (!newUser) {
    return res.status(400).json({ message: "Invalid user data" });
  }

  res.status(201).json({ user: newUser });
};

// GET /users/:userId
const getUserById = (req, res) => {
  res.json({ user: User.findById(Number(req.params.userId)) });
};

// PUT /users/:userId
const updateUser = (req, res) => {
  res.json({ user: User.updateOneById(Number(req.params.userId), req.body) });
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  User.deleteOneById(Number(req.params.userId));
  res.json({ message: "User deleted" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
