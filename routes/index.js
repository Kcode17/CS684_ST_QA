const express = require('express');
const router  = express.Router();
const axios = require('axios');
const moment = require('moment');
const math = require('math');
const {ensureAuthenticated} = require('../config/auth')

//login page
// router.get('/', (req,res)=>{
//     res.render('welcome');
// })

router.get('/',async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&General'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('welcome',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})




router.get('/dashboard',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&General'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
});
module.exports = router; 