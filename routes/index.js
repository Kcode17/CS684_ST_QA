
const express = require('express')
const axios = require('axios')
const newsre=express.Router()
const moment = require('moment')
const math = require('math')


newsre.get('/landinggg',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' + 'category=general&'
          'apiKey=28fc8e0e3eb248c5ad2aadca845c73d9';

        const news_get =await axios.get(url)
        res.render('index',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})



//newsr.post('/search',async(req,res)=>{
  //  const search=req.body.search
    //console.log(req.body.search)


    //try {
      //  var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=36f3e29b704f41339af8439dc1228334`

        //const news_get =await axios.get(url)
        //res.render('news',{articles:news_get.data.articles})





    //} catch (error) {
      //  if(error.response){
        //    console.log(error)
        //}

 //   }
//})

//newsre.get('/index',async(req,res)=>{
  //  var category = req.params.category;
   // try {
     //   var url = 'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=36f3e29b704f41339af8439dc1228334';

       // const news_get =await axios.get(url)
       // res.render('category',{articles:news_get.data.articles})

//    } catch (error) {
  //      if(error.response){
    //        console.log(error)
      //  }

    //}
//})

newsre.get

module.exports=newsre