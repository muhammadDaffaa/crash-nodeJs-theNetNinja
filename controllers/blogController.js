// blog_index, blog_details, blog_create_get, blog_cretate_post, blog_delete

const Blog = require("../models/blog");

// *Blog_index
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blog", blogs: result });
    })
    .catch((err) => res.status(404).render("404", { title: "Page Not Found" }));
};

// *Blog_details
const blog_details = (req, res) => {
  const _id = req.params.id;

  Blog.findById(_id)
    .then((result) =>
      res.render("details", { title: "Detail Blog", blog: result })
    )
    .catch((err) => res.status(404).render("404", { title: "Page Not Found" }));
};

//* blog_create_get
const blog_create_get = (req, res) => {
  res.render("create", { title: "Create" });
};

//* blog_create_post
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => res.status(404).render("404", { title: "Page Not Found" }));
};

// * blog_delete
const blog_delete = (req, res) => {
  const _id = req.params.id;

  Blog.findByIdAndDelete(_id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => res.status(404).render("404", { title: "Page Not Found" }));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
