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


//NEW STUFF

router.get('/general',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'general'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 

    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('general',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/entertainment',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'entertainment'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('entertainment',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/sports',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'sports'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('sports',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/business',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'business'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('business',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/health',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'health'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('health',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/technology',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'technology'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('technology',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/science',async(req,res)=>{
    var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var category = 'science'
    var apiKey = '&apiKey=36f3e29b704f41339af8439dc1228334'
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';
        const news_get =await axios.get(url)
        res.status(200).render('science',{sources:news_get.data.sources})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

//END OF NEW STUFF



module.exports = router; 