const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");

// Express APP
const app = express();

// Connect to MongoDB
const dbUrl = `mongodb+srv://example:example@cluster0.zzbl4.mongodb.net/crash-node?retryWrites=true&w=majority`;
mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    // Listen APP
    app.listen(3000, () => console.log("Port 3000 is actived"));
  })
  .catch((err) => console.log(err));

// Register View Engine
app.set("view engine", "ejs");

// Middleware % Static files
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => res.redirect("/blogs"));

app.get("/about", (req, res) => res.render("about", { title: "About" }));

// Blog Routes
app.use("/blogs", blogRoutes);

// Page 404
app.use((req, res) =>
  res.status(404).render("404", { title: "Page Not Found" })
);
