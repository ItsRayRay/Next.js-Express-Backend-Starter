// Import the Express.js framework and create an instance of it
const express = require("express");
const app = express();

// Define a constant for the port number the server will listen on
const PORT = 8080;

// Import and use the CORS middleware to allow cross-origin requests
const cors = require("cors");
app.use(cors());

// Define a route that responds to GET requests at the "/api/home" endpoint
app.get("/api/home", (req, res) => {
    // When a GET request is received, send a JSON response with the message "Hello World!"
    res.json({ message: "Hello world", people: ["Foo","Bar", "1"] });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
