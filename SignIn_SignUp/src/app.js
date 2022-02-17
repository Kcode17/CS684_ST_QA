const express = require("express"); // Include ExpressJS
const path = require("path");
const app = express(); // Create an ExpressJS app
const hbs = require("hbs");


require("./db/conn");
const Register = require("./models/registers.js");
const {json} = require("express");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res) => {
   res.render("index") 
});

app.get("/register", (req,res) => {
    res.render("register");
 });

 //create new user in DB
 app.post("/register", async (req,res) => {
    try{
        const password = req.body.password;
        const rpassword = req.body.repeatpassword;
        console.log('step 1');

        if(password === rpassword){
            const registerUser = new Register({
                email: req.body.email,
                password: req.body.password
            })
            console.log('step 2');
            const registered = await registerUser.save();
            res.status(201).render(index);
        }

        else{
            console.log('step 3');
            res.send("password does not match")
        }
        
    } 
    
    catch (error){
        res.status(400).send(error);
    }
 })

// Function to listen on the port
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
})

