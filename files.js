// Core Modules
const fs = require("fs");

//! reading files
// * Asynchronus
// fs.readFile("./docs/blog1.txt", (err, data) =>
//   err ? console.log(err) : console.log(data.toString())
// );

//! writing files
// * Asynchronus
// fs.writeFile("./docs/blog1.txt", "Hello, World", () => {
//   console.log("file was written");
// });

// fs.writeFile("./docs/blog2.txt", "Hello, Again!", () => {
//   console.log("File Was written Again in a New File");
// });

//! Directories/Folder
if (!fs.existsSync("./assets")) {
  //* Asyncronus
  fs.mkdir("./assets", (err) =>
    err ? console.log(err) : console.log("There is a new folder")
  );
} else {
  // *Asynchronus
  fs.rmdir("./assets", (err) =>
    err ? console.log(err) : console.log("Folder was remove")
  );
}

// deleting files
if (fs.existsSync("./docs/blog1.txt")) {
  //* Asynchronus
  fs.unlink("./docs/blog1.txt", (err) =>
    err ? console.log(err) : console.log("File Was removed")
  );
}
