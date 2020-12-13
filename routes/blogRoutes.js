const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

//! Blogs Routes
router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

router.delete("/:id", blogController.blog_delete);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

module.exports = router;
