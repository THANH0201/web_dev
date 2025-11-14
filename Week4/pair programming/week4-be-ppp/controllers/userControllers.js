const User = require("../models/userModel.js"); 

const getAllUsers = (req, res) => {
  res.json(User.getAll());
};
 
const createUser = (req, res) => {
  const {name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
  const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);
  if (newUser) {
    res.json(newUser);
  } else {
    res.status(500).json({ message: "Fail to create tour" });
  }
};

const getUserById = (req, res) => {
  const userId = req.params.userrId;
  const user = user.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const updatedUser = user.updateOneById(userId, updatedData);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = user.deleteOneById(userId);
  if (isDeleted) {
    res.json({ message: "Deleted successfully" });
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
