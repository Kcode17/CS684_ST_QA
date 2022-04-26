const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const bodyParser = require('body-parser')
const {check, validationResult} = require('express-validator')
const methodOverride = require("method-override");
const path = require('path');

// // load routers


const services = require('../services/render');
const controller = require('../controller/controller');
//login handle
router.get('/login',(req,res)=>{
    res.render('login');
})

//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

/**
*  @description for update user
*  @method GET /update-user
*/
// router.get('/update_user', services.update_user)

router.get('/api/Users', controller.find);
router.post('/api/Users/news/:id', controller.newsget);
router.put('/api/Users/:id', controller.update);


//Register handle
router.post('/login',(req,res,next)=>{
passport.authenticate('local',{
    successRedirect : '/dashboard/home/1',
    failureRedirect: '/users/login',
    failureFlash : true
})(req,res,next)
})


 
router.get('/update_user', (req, res) => {
    res.render("update_user", { id: req.user._id,
                              general: req.user.general,
                              sport: req.user.sport,
                              entertainment: req.user.entertainment,
                              health: req.user.health,
                              science: req.user.science,
                              business: req.user.business,
                              technology: req.user.technology,
                            });
  });  

  //register post handle
  router.post('/register',(req,res)=>{
    const {name,email, password, password2} = req.body;
    let errors = [];
    console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
    if(!name || !email || !password || !password2) {
        errors.push({msg : "Please fill in all fields"})
    }
    //check if match
    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    }
    
    //check if password is more than 6 characters
    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    if(password.includes(" ") == true) {
        errors.push({msg : 'No spaces are allowed in the username'})
    }
    if(name.includes(" ") == true) { //replace
        errors.push({msg : 'No spaces are allowed in the username'})
    }
    if(errors.length > 0 ) {
    res.render('register', {
        errors : errors,
        name : name,
        email : email,
        password : password,
        password2 : password2,
        general : 'yes'
    })
     } else {
        //validation passed
       User.findOne({email : email}).exec((err,user)=>{
        console.log(user);   
        if(user) {
            errors.push({msg: 'email already registered'});
            res.render('register',{errors,name,email,password,password2})  
           } else {
            const newUser = new User({
                name : name,
                email : email,
                password : password,
               
            });
    
            //hash password
            bcrypt.genSalt(10,(err,salt)=> 
            bcrypt.hash(newUser.password,salt,
                (err,hash)=> {
                    if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                    //save user
                    newUser.save()
                    .then((value)=>{
                        console.log(value)
                        req.flash('success_msg','You have now registered!');
                        res.redirect('/users/login');
                    })
                    .catch(value=> console.log(value));
                      
                }));
             }
       })
    }
    })

    
//logout
router.get('/logout',(req,res)=>{
req.logout();
req.flash('success_msg','Now logged out');
res.redirect('/1'); 
})


router.get('/api/Users/news/:id', (req, res) => {
    const id = req.params.id;  
  
    for (let i = 0; i <User.length; i++) {
        let user = User[i]
        if (user.id === id) {
            axios
                .get('http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=36f3e29b704f41339af8439dc1228334')
                .then(response => {
                let userData = response.data;
                res.send(userData);})
                  
                
        }
    }
  
  });



  



module.exports  = router;
