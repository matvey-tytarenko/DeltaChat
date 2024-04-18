const http = require("http");
const app = require("./index");

require("dotenv").config();

// Create Server
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Start Server
server.listen(PORT, () => {
  try {
    console.log(`Server has been started on: http://localhost:${PORT}`);
  } catch (error) {
    console.error(`Server Error: ${error}`);
  }
});
