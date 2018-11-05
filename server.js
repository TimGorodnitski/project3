const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const flash = require("express-flash-messages");
const passport = require('passport');
const session = require('express-session');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(session({
  secret: 'password',
  resave: true,
  maxAge: 20000,
  saveUninitialized: true
}));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./passportconfig').configure(passport);
app.use(expressValidator());

app.use(express.static('public'));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/api.js");
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
