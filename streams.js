const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", "utf-8");
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("---New Chunk---");
//   console.log(chunk);
//   writeStream.write("\n NEW CHUNK \n");
//   writeStream.write(chunk);
// });

// *Pipe
readStream.pipe(writeStream);
