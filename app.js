const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const axios = require('axios');
const moment = require('moment');
app.locals.moment = moment;
const math = require('math');

//import routes and validation


const services = require('./services/render');
const controller = require('./controller/controller');

const usersRoutes = require("./routes/users");
const indexRoutes = require("./routes/index");

// middleware defitions
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//passport config:
require('./config/passport')(passport)

//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })

/**
 *  @description for update user
 *  @method GET /update-user
 */
 app.get('/update_user', services.update_user)


 // API
 //route.post('/api/users', controller.create);
 app.get('/api/Users', controller.find);
 app.put('/api/Users/:id', controller.update);
 //route.delete('/api/users/:id', controller.delete);    


//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));



//routes definition
//Welcome route
// app.get("/api/welcome", (req,res) => {
//     res.status(200).send({message: "Welcome to the MEN-REST-API"});
//   }); 
  
  // authentication routes to secure the API endpoints
  //app.use("/api/user", authRoutes); //authentication routes (register, login)
  //app.use("/api/products", productRoutes); //CRUD routes




app.listen(3000); 

module.exports = app;