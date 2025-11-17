const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchUse
} = require("../controllers/userControllers");
 
// GET /user
router.get("/", getAllUsers);

// POST /user
router.post("/", createUser);

// GET /users/:userId
router.get("/:userId", getUserById);

// PUT /users/:userId
router.put("/:userId", updateUser);

// DELETE /users/:userId
router.delete("/:userId", deleteUser);

// Update car using PATCH 
// router.patch('/:userId', patchCar)

module.exports = router;