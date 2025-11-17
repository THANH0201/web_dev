const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  // patchlog
} = require("../controllers/blogControllers");
 
// GET /blogs
router.get("/", getAllBlogs);

// POST /blogs
router.post("/", createBlog);

// GET /blogs/:blogId
router.get("/:carId", getBlogById);

// PUT /blogs/:blogId
router.put("/:carId", updateBlog);

// DELETE /blogs/:blogId
router.delete("/:carId", deleteBlog);

// Update car using PATCH 
// router.patch('/:blogId', patchCar)

module.exports = router;