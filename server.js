require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const {check, validationResult} = require('express-validator')
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("./middlewares/auth");

const app = express();

const initializePassport = require("./config");
initializePassport(
  passport,
  async (email) => {
    const userAvailable = await User.findOne({ email });
    return userAvailable;
  },
  async (id) => {
    const userAvailable = await User.findOne({ _id: id });
    return userAvailable;
  }
);
app.use(express.static('public'));

app.set("view engine", "ejs");

function checkPassword(str)
  {
    var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
    return re.test(str);
  }

app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(express.static("public"));


app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register");
});app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register");
});

app.post("/register", checkNotAuthenticated, async (req, res) => {
  const username = req.body.username.trim();
  const trimUsername = username.trim();
  const usernamelength = trimUsername.length;
  const email = req.body.email;
  const userAvailable = await User.findOne({ email: req.body.email });
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const passwordmatch = await User.findOne({ email: req.body.email });
 
   
            if(password !== confirmpassword){
              req.flash("error", "Passwords do not match");
              res.redirect("/register");
            } else {
                try {
                  const hashedPassword = await bcrypt.hash(req.body.password, 10);
                  const hashedConfirmPassword = await bcrypt.hash(req.body.confirmpassword, 10);
                  const user = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                    confirmpassword: hashedConfirmPassword,
                  });
                  await user.save();
                  console.log("Successful LOGIN")
                  } catch (error) {
                    console.log(error);
                    res.status(400).send(error); //new
                    res.redirect("/register");
            
			} }
		});



mongoose
  .connect("mongodb://localhost:27017/auth", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on Port 3000");
    });
  });

  
