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

  function checkEmail(str)
  {
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
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

app.get("/", checkAuthenticated, (req, res) => {
  res.render("index", { username: req.user.username });
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register");
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.post("/register", checkNotAuthenticated, async (req, res) => {
  var username = req.body.username;
  var username = username.trim();
  var trimUsername = username.trim();
  var usernamelength = trimUsername.length;
  var email = req.body.email;
  var userAvailable = await User.findOne({ email: req.body.email });
  var password = req.body.password;
  var confirmpassword = req.body.confirmpassword;
  var passwordmatch = await User.findOne({ email: req.body.email });
 
  if(username === "") {  //replace
    req.flash("error", "Username cannot be blank");
    res.redirect("/register");
  } else { 
      if(email === "") {
        req.flash("error", "Email cannot be blank");
        res.redirect("/register");
      } 
      else { 
        console.log(username)   //replace
      if(username.includes(" ") == true) { //replace
       req.flash("error", "No spaces are allowed in the username");
      res.redirect("/register");
      } 
        else{
          if((usernamelength) <8) {
            req.flash("error", "username needs to be min of 8 characters");
            res.redirect("/register");
          }
          else{
            if(checkEmail(email) == false) {
              req.flash("error", "Email is not valid");
              res.redirect("/register");
            }
        
        else { 
          if (userAvailable) {
            req.flash("error", "User with that email already exists");
            res.redirect("/register");
          } else {
            console.log(password)
            console.log(confirmpassword)
            if((checkPassword(password) == false) || (checkPassword(confirmpassword) == false))
            {
              req.flash("error", "Password should have no spaces, must be 8 char long, atleast 1 Uppercase letter, 1 Lowercase letter and 1 special char");
              res.redirect("/register");
            } 
            else {  
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
                  res.redirect("/login");
                  } catch (error) {
                    console.log(error);
                    res.status(400).send(error); //new
                    res.redirect("/register");
            }}
          }}
       }
    }}
  }
} 
});

app.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
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

  
