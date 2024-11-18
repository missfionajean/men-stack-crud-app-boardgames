/* ----------------------------------------------------------- */
/* ------------------------ Packages ------------------------- */
/* ----------------------------------------------------------- */

// importing .env package for local use
const dotenv = require("dotenv");
// Loads the environment variables from .env file
dotenv.config();

// importing express package for local use
const express = require("express");
// making express more usable by storing in variable
const app = express();

// importing mongoose (mongo butler) package for local use
const mongoose = require("mongoose");

// adding in dependencies for DELETE functionality
const methodOverride = require("method-override");
const morgan = require("morgan");

// imports native path package to access static files
const path = require("path");

/* ----------------------------------------------------------- */
/* ------------------------ Database ------------------------- */
/* ----------------------------------------------------------- */

// connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);

// log connection status to terminal on start (for debugging)
mongoose.connection.on("connected", () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

// import fruit DB model for local use (CRUD functionality)
const game = require("./models/game.js");

/* ----------------------------------------------------------- */
/* ----------------------- Express.use ----------------------- */
/* ----------------------------------------------------------- */

/* LECTURE NOTES: This middleware parses incoming request bodies, extracting form data and converting it into a JavaScript object. It then attaches this object to the req.body property of the request, making the form data easily accessible within our route handlers. To enable this functionality, add the following line to server.js, right after importing the DB model. */
app.use(express.urlencoded({ extended: false }));

// telling express to use more installed middleware
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// defines static path for CSS styling
app.use(express.static(path.join(__dirname, "public")));

/* ----------------------------------------------------------- */
/* -------------------------- Server ------------------------- */
/* ----------------------------------------------------------- */

// easily modifiable server port
const PORT = 3001;

// connecting express to server port
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

/* ----------------------------------------------------------- */
/* --------------------------- HTTP -------------------------- */
/* ----------------------------------------------------------- */

// GET request; "/" (home page)
app.get("/", (req, res) => {
	res.send("Hello world!");
});
