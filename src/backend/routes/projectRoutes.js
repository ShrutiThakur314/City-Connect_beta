const express = require("express");
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private (requires authentication)
router.post("/", authMiddleware, createProject);

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get("/", getProjects);

// @route   GET /api/projects/:id
// @desc    Get a single project by its ID
// @access  Public
router.get("/:id", getProjectById);

// @route   PUT /api/projects/:id
// @desc    Update a project by its ID
// @access  Private (requires authentication)
router.put("/:id", authMiddleware, updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project by its ID
// @access  Private (requires authentication)
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
