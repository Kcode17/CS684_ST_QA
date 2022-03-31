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
    var country = 'country=us'
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
    var category = '&category=general'
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
})

router.get('/dashboard/sports',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&category=sport'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard_sports',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/dashboard/entertainment',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&category=entertainment'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard_entertainment',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})


router.get('/dashboard/health',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&category=health'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard_health',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})


router.get('/dashboard/science',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&category=science'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard_science',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/dashboard/business',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&category=business'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard_business',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/dashboard/technology',ensureAuthenticated, async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=in'
    var category = '&category=technology'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + country + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('dashboard_technology',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})



























;












module.exports = router; 