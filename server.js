require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const {check, validationResult} = require('express-validator')
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const route = express.Router()
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const request = require('request');
const path = require('path');


const axios = require('axios')


const math = require('math')

const moment = require('moment')

const {
  checkAuthenticated,
  checkNotAuthenticated //checkNotAuthenticated,
  
} = require("./middlewares/auth");

const app = express();
app.locals.moment = moment;
const initializePassport = require("./config");
const { Router } = require("express");

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

//app.use(express.cookieParser());

app.use('/',require('./routes/news'))
//app.use('/landing',require('./routes/index'))
//app.use('/',require('./landing'))
app.set('views','./views')

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
    //store: sessionStore,
    //cookie: {
    //  maxAge: 1000 * 60 * 60 *24
    //}

  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(express.static("public"));

//app.get("/landing", checkAuthenticated, async (req, res) => {
  //try {
    //var url = 'http://newsapi.org/v2/top-headlines?' +
      //'country=in&' + 'category=general&'
      //'apiKey=28fc8e0e3eb248c5ad2aadca845c73d9';

    //const news_get =await axios.get(url)
  //  res.render('index',{articles:news_get.data.articles, username: req.user.username, id: req.user._id,})

//} catch (error) {
    //if(error.response){
  //      console.log(error)
  //  }

//}
  //OLD res.render("index", { username: req.user.username, id: req.user._id, });
//});


app.get("/register", checkNotAuthenticated, (req, res) => {   //checkNotAuthenticated
  res.status(200).render("register");
});

app.get("/login", checkNotAuthenticated, (req, res) => {  //checkNotAuthenticated
  res.status(200).render("login");
});

app.post("/register", checkNotAuthenticated, async (req, res) => {   //checkNotAuthenticated
  var username = req.body.username;
  //var username = username.trim();
  //var trimUsername = username.trim();
  //var usernamelength = trimUsername.length;
  var email = req.body.email;
  var userAvailable = await User.findOne({ email: req.body.email });
  var password = req.body.password;
  var confirmpassword = req.body.confirmpassword;
  var passwordmatch = await User.findOne({ email: req.body.email });
 
  if(username === "") {  //replace
    req.flash("error", "Username cannot be blank");
    res.send('Username cannot be blank').redirect("/register");
  } else { 
      if(email === "") {
        req.flash("error", "Email cannot be blank");
        res.send('Email cannot be blank').redirect("/register");
      } 
      else { 
        console.log(username)   //replace
     // if(username.includes(" ") == true) { //replace
      // req.flash("error", "No spaces are allowed in the username");
     // res.redirect("/register");
     // } 
        //else{
         // if((usernamelength) <8) {
          //  req.flash("error", "username needs to be min of 8 characters");
          //  res.redirect("/register");
          //}
        //  else{
            if(checkEmail(email) == false) {
              req.flash("error", "Email is not valid");
              res.send('Email is not valid').redirect("/register");
            }
        
        else { 
          if (userAvailable) {
            req.flash("error", "User with that email already exists");
            res.send('User with that email already exists').redirect("/register");
          } else {
            console.log(password)
            console.log(confirmpassword)
            if((checkPassword(password.trim()) == false) || (checkPassword(confirmpassword.trim()) == false))
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
                  const hashedPassword = await bcrypt.hash(req.body.password.trim(), 10);
                  const hashedConfirmPassword = await bcrypt.hash(req.body.confirmpassword.trim(), 10);
                  const user = new User({
                    username: req.body.username.trim(),
                    email: req.body.email,
                    password: hashedPassword,
                    confirmpassword: hashedConfirmPassword,
                    sport: "no",
                    business: "no",
                    entertainment: "no",
                    general: "yes",
                    health: "no",
                    science: "no",
                    technology: "no"
                  });
                  await user.save();
                  console.log("registered successfully")
                  res.status(200).send('Successful login').redirect("/login");
                  
                  } catch (error) {
                    console.log(error);
                    res.status(400).send(error); //new
                    res.redirect("/register");
            }}
          }}
      // }
    }}
  //}
} 
});

//app.get("/landing", checkAuthenticated, (req, res) => {
  //res.render("index", {articles:news_get.data.articles, username: req.user.username, id: req.user._id,});
//});


app.get('/landingew',checkAuthenticated, async(req,res)=>{
  try {
      var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=in&' + 'category=general&'
        'apiKey=c3119190b3984f2e93622a901920c7be';

      const news_get =await axios.get(url, {withCredentials: true})
      res.write(JSON.stringify(response))
      res.render('index',{articles:news_get.data.articles, username: req.user.username, id: req.user._id})

  } catch (error) {
      if(error.response){
          console.log(error)
      }

  }
})



app.get('/landing',checkAuthenticated, async(req,res)=>{
  //  var category = req.params.category;
  try {
      var url = 'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=c3119190b3984f2e93622a901920c7be';

      const news_get =await axios.get(url)
      res.status(200).render('index',{articles:news_get.data.articles, username: req.user.username, id: req.user._id})
            

  } catch (error) {
      if(error.response){
          console.log(error)
      }

  }
})




app.post(
  "/login",
  checkNotAuthenticated,  // checkNotAuthenticated
  passport.authenticate("local", {
    successRedirect: "/landing",
    failureRedirect: "/login",
    failureFlash: true,
  })
);








app.get("/update_user", checkAuthenticated, (req, res) => {
  res.render("update_user", { id: req.user._id,
                            sport: req.user.sport,
                            health: req.user.health,
                            science: req.user.science,
                            technology: req.user.technology,
                            general: req.user.general,
                            business: req.user.business,
                            entertainment: req.user.entertainment,
                          });
  //res.render("settings", { sport: req.user.sport });
  //res.render("settings", { general: req.user.general });
  //res.render("settings", { entertainment: req.user.entertainment });
  //res.render("settings", { business: req.user.business });
});


app.get("update_user/:id", async (req, res)=>{
  User.findById(req.params.id, (err,doc) => {
    if (!err) {
      res.render("/update_user", {
        viewTitle: "Update User",
        user: doc 
      })
    }
  });
  try{
    const user = await User.findById(req.params.id)
    res.json(user)
  }catch(err){
    res.send('Error' + err)
  }
})


app.post('/api/users/:id', (req, res) => {
  // Reading isbn from the URL
  const id = req.params.id;
  const sportupdate = req.body.sport;
  const generalupdate = req.body.general;
  const businessupdate = req.body.business;
  const entertainmentupdate = req.body.entertainment;
  const healthupdate = req.body.health;
  const scienceupdate = req.body.science;
  const technologyupdate = req.body.technology;


  // Remove item from the books array
  for (let i = 0; i <User.length; i++) {
      let user = User[i]
      if (user.id === id) {
          user.sport = sportupdate;
      }
  }

  res.send('UPDATED');
});



 

app.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

// load routers
app.use('/', require('./routes/router'))

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

  module.exports = app;