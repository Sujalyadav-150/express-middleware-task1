const express = require("express");

const app = express();

// Custom middleware
const addUser = (req, res, next) => {
    req.user = "Guest";
    next();
};

// /welcome route using the custom middleware
app.get("/welcome", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
