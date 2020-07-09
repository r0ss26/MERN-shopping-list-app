const express = require("express");
const mongoose = require("mongoose"); // MongoDB ORM
const bodyParser = require("body-parser"); // For parsing request body data
const path = require("path");

const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

// Use routes
app.use("/api/items", items);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000; // process.env.port is an environment variable for heroku deployment

app.listen(port, () => console.log(`Server started on port ${port}`));
