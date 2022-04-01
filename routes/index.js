const express = require('express');
const router  = express.Router();
const axios = require('axios');
const moment = require('moment');
const math = require('math');
const User = require("../models/user");

const {ensureAuthenticated} = require('../config/auth')

router.get('/',async(req,res)=>{
    var api = 'http://newsapi.org/v2/top-headlines?'
    var country = 'country=us'
    var category = '&General'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 
    try {
        var url = api + country + category + apiKey
        const news_get =await axios.get(url)
        res.status(200).render('welcome',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

// router.get('/dashboard',ensureAuthenticated, async(req,res)=>{
//     var api = 'http://newsapi.org/v2/top-headlines?'
//     var country = 'country=in'
//     var category = '&General'
//     var apiKey = '&apiKey=f75068836d0a45159177374141456b19'
//     try {
//         var url = api + country + category + apiKey
//         //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
//         const news_get =await axios.get(url)
//         console.log(news_get.data.articles)
//         res.status(200).render('dashboard',{articles:news_get.data.articles, user: req.user, id: req.user._id})
        
//     } catch (error) {
//         if(error.response){
//             console.log(error)
//         }
//     }
// });


/// THIS IS CRITICAL CODE!!! ///
router.get('/dashboard/home',ensureAuthenticated, async(req,res)=>{ // changed the rroute /dashboard/home
const art = []
    try {
            if(req.user.general === 'yes'){
                var url1 = 'http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19';
                const news_get =await axios.get(url1)
                for (let i = 0; i < 20; i++) {
                    art.push(news_get.data.articles[i])
                  } 
            }   
            if(req.user.business == 'yes'){
                var url2 = 'http://newsapi.org/v2/top-headlines?category=business&apiKey=f75068836d0a45159177374141456b19';
                const news_bus =await axios.get(url2)
                for (let i = 0; i < 20; i++) {
                    art.push(news_bus.data.articles[i])
                  } 
                
            }   
            if(req.user.entertainment == 'yes'){
                var url3 = 'http://newsapi.org/v2/top-headlines?category=entertainment&apiKey=f75068836d0a45159177374141456b19';
                const news_ent =await axios.get(url3)
                for (let i = 0; i < 20; i++) {
                    art.push(news_ent.data.articles[i])
                  } 
            }   
            if(req.user.health == 'yes'){
                var url4 = 'http://newsapi.org/v2/top-headlines?category=health&apiKey=f75068836d0a45159177374141456b19';
                const news_hlt =await axios.get(url4)
                for (let i = 0; i < 20; i++) {
                    art.push(news_hlt.data.articles[i])
                }
            }   
            if(req.user.science == 'yes'){
                var url5 = 'http://newsapi.org/v2/top-headlines?category=science&apiKey=f75068836d0a45159177374141456b19';
                const news_sci =await axios.get(url5)
                for (let i = 0; i < 20; i++) {
                    art.push(news_sci.data.articles[i])
                } 
            }   
            if(req.user.sport == 'yes'){
                var url6 = 'http://newsapi.org/v2/top-headlines?category=sports&apiKey=f75068836d0a45159177374141456b19';
                const news_sport =await axios.get(url6)
                for (let i = 0; i < 20; i++) {
                    art.push(news_sport.data.articles[i])
                }   
            }  
            if(req.user.technology == 'yes'){
                var url7 = 'http://newsapi.org/v2/top-headlines?category=technology&apiKey=f75068836d0a45159177374141456b19';
                const news_tech =await axios.get(url7)
                for (let i = 0; i < 20; i++) {
                    art.push(news_tech.data.articles[i])
                } 
                
            }
            // const page = req.query.page
            // const limit = 5
            
            // const startIndex = (page - 1) * limit
            // const endIndex= page * limit
            
            // const results = {}

            // results.results = art.slice(startIndex, endIndex)
            // res.json(results)
            
            res.status(200).render('home',{articles:art, user: req.user, id: req.user._id})
                
            } catch (error) {
                if(error.response){
                    console.log(error)
                }
            }
});
/// CRITICAL CODE ENDS HERE

/// ALTERNATE to critical code
router.get('/dashboard/home/:page', ensureAuthenticated, async(req,res)=>{
    const art = []
    try {
        //Check if category is available and begin consolidating into one data object
        if(req.user.general === 'yes'){
            var url1 = 'http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_get =await axios.get(url1)
            for (let i = 0; i < 100; i++) {
                art.push(news_get.data.articles[i])
              } 
        }   
        if(req.user.business == 'yes'){
            var url2 = 'http://newsapi.org/v2/top-headlines?category=business&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_bus =await axios.get(url2)
            for (let i = 0; i < 100; i++) {
                art.push(news_bus.data.articles[i])
              } 
        }   
        if(req.user.entertainment == 'yes'){
            var url3 = 'http://newsapi.org/v2/top-headlines?category=entertainment&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_ent =await axios.get(url3)
            for (let i = 0; i < 100; i++) {
                art.push(news_ent.data.articles[i])
              } 
        }   
        if(req.user.health == 'yes'){
            var url4 = 'http://newsapi.org/v2/top-headlines?category=health&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_hlt =await axios.get(url4)
            for (let i = 0; i < 100; i++) {
                art.push(news_hlt.data.articles[i])
            }
        }   
        if(req.user.science == 'yes'){
            var url5 = 'http://newsapi.org/v2/top-headlines?category=science&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_sci =await axios.get(url5)
            for (let i = 0; i < 100; i++) {
                art.push(news_sci.data.articles[i])
            } 
        }   
        if(req.user.sport == 'yes'){
            var url6 = 'http://newsapi.org/v2/top-headlines?category=sports&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_sport =await axios.get(url6)
            for (let i = 0; i < 100; i++) {
                art.push(news_sport.data.articles[i])
            }   
        }  
        if(req.user.technology == 'yes'){
            var url7 = 'http://newsapi.org/v2/top-headlines?category=technology&apiKey=f75068836d0a45159177374141456b19&pageSize=100';
            const news_tech =await axios.get(url7)
            for (let i = 0; i < 100; i++) {
                art.push(news_tech.data.articles[i])
            } 
            
        }

        //Sorting the consolidated articles data
        const arr = art
        const sortByDate = arr => {
        const sorter = (a, b) => {
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }
        arr.sort(sorter);
    };
        sortByDate(arr);
        const reach = {}
        reach.reach = arr.slice(0,250)
        //arr = arr.slice(0,250);
        //arr.arr = arr.slice(0, 10);
  
        //Pagination - consolidated data
        //var perPage = 4
        const page = req.params.page || 1

        //const page = req.query.page
        const limit = 20
        const countt = reach.reach.length //art
        
        const startIndex =  ((limit * page) - limit) //(page - 1) * limit
        const endIndex= ((page * limit))

        //console.log("PRINTING PAGINATED NEWS!!!")
        const results = {}

        results.results = reach.reach.slice(startIndex, endIndex)  //art
        
        //console.log("END OF PAGINATED NEWS") 
        
        
        //res.status(200).render('home',{articles:art, user: req.user, id: req.user._id}) // uncomment line 
        res.status(200).render('home', {
                articles: results.results,
                pages: Math.ceil(countt / limit),
                current: page,
                user: req.user,
                id: req.user._id
                })
           // })
        
       // })
    
    }catch (error) {
                if(error.response){
                    console.log(error)
                }
            }
});
    
/// END OF alternate to critical code


router.get('/dashboard/general',ensureAuthenticated, async(req,res)=>{
    const art = []
        try {    
            var url1 = 'http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19';
            const news_get =await axios.get(url1)
            for (let i = 0; i < 20; i++) {
                art.push(news_get.data.articles[i])
                }     
                res.status(200).render('general',{articles:art, user: req.user, id: req.user._id})    
                } catch (error) {
                    if(error.response){
                        console.log(error)
                    }
                }
    });

router.get('/dashboard/health',ensureAuthenticated, async(req,res)=>{
    const art = []
    try {     
        var url1 = 'http://newsapi.org/v2/top-headlines?category=health&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url1)
        for (let i = 0; i < 20; i++) {
            art.push(news_get.data.articles[i])
            }     
        res.status(200).render('health',{articles:art, user: req.user, id: req.user._id})               
        } catch (error) {
            if(error.response){
                console.log(error)
                }
            }
    });
       
router.get('/dashboard/entertainment',ensureAuthenticated, async(req,res)=>{
    const art = []
    try {     
        var url1 = 'http://newsapi.org/v2/top-headlines?category=entertainment&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url1)
        for (let i = 0; i < 20; i++) {
            art.push(news_get.data.articles[i])
            }     
        res.status(200).render('entertainment',{articles:art, user: req.user, id: req.user._id})               
        } catch (error) {
            if(error.response){
                console.log(error)
                }
            }
    });

router.get('/dashboard/science',ensureAuthenticated, async(req,res)=>{
    const art = []
    try {     
        var url1 = 'http://newsapi.org/v2/top-headlines?category=science&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url1)
        for (let i = 0; i < 20; i++) {
            art.push(news_get.data.articles[i])
            }     
        res.status(200).render('science',{articles:art, user: req.user, id: req.user._id})               
        } catch (error) {
            if(error.response){
                console.log(error)
                }
            }
    });

router.get('/dashboard/business',ensureAuthenticated, async(req,res)=>{
    const art = []
    try {     
        var url1 = 'http://newsapi.org/v2/top-headlines?category=business&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url1)
        for (let i = 0; i < 20; i++) {
            art.push(news_get.data.articles[i])
            }     
        res.status(200).render('business',{articles:art, user: req.user, id: req.user._id})               
        } catch (error) {
            if(error.response){
                console.log(error)
                }
            }
    });

router.get('/dashboard/sports',ensureAuthenticated, async(req,res)=>{
    const art = []
    try {     
        var url1 = 'http://newsapi.org/v2/top-headlines?category=sports&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url1)
        for (let i = 0; i < 20; i++) {
            art.push(news_get.data.articles[i])
            }     
        res.status(200).render('sports',{articles:art, user: req.user, id: req.user._id})               
        } catch (error) {
            if(error.response){
                console.log(error)
                }
            }
    });

    router.get('/dashboard/technology',ensureAuthenticated, async(req,res)=>{
        const art = []
        try {     
            var url1 = 'http://newsapi.org/v2/top-headlines?category=technology&apiKey=f75068836d0a45159177374141456b19';
            const news_get =await axios.get(url1)
            for (let i = 0; i < 20; i++) {
                art.push(news_get.data.articles[i])
                }     
            res.status(200).render('technology',{articles:art, user: req.user, id: req.user._id})               
            } catch (error) {
                if(error.response){
                    console.log(error)
                    }
                }
        });

router.get('/general',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var api = 'https://newsapi.org/v2/top-headlines?category='
    var category = 'general'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 

    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('general',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/entertainment',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    var api = 'https://newsapi.org/v2/top-headlines?category='
    //var country = 'country=us'
    var category = 'entertainment'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('entertainment',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/sports',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var api = 'https://newsapi.org/v2/top-headlines?category='
    var category = 'sports'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('sports',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/business',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var api = 'https://newsapi.org/v2/top-headlines?category='
    var category = 'business'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('business',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/health',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var api = 'https://newsapi.org/v2/top-headlines?category='
    var category = 'health'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('health',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/technology',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var api = 'https://newsapi.org/v2/top-headlines?category='
    var category = 'technology'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19' 
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('technology',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

router.get('/science',async(req,res)=>{
    //var api = 'https://newsapi.org/v2/top-headlines/sources?category='
    //var country = 'country=us'
    var api = 'https://newsapi.org/v2/top-headlines?category='
    var category = 'science'
    var apiKey = '&apiKey=f75068836d0a45159177374141456b19'
    try {
        var url = api + category + apiKey
        //'http://newsapi.org/v2/top-headlines?country=in&category=general' + '&apiKey=f75068836d0a45159177374141456b19';
        const news_get =await axios.get(url)
        res.status(200).render('science',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

// REST API WORKING GOOD!!!
// router.get("/news", async (req, res) => {
// 	try {
// 		const response = await axios({
// 			url: "http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19",
// 			method: "get",
// 		});
// 		res.status(200).json(response.data);
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });


// router.get("/news/:id", async (req, res) => {
// 	const id = req.params.id;
//     try {
//         for (let i = 0; i <User.length; i++) {
//                    let user = User[i]
//                     if (user.id === id) {     
// 		                const response = await axios({
// 			            url: "http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19",
// 			            method: "get",
// 		                });
//                         res.status(200).json(response.data)
//                     }else{
//                         res.send("This user is not valid")
//                         }
//                     }
		
// 	} catch (err) {
// 		res.status(500).json({ message: err });
// 	}
// });

router.get("/news/users/:id", async (req, res) => {
    const art = []
    var userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    
    if (!user) {
        return res.status(401).json({ message: "Error retrieving user with id " });
      }
    try{
        if (!user) {
          return res.status(401).json({ message: "Error retrieving user with id " });
        }
        else {
            if(user.general === 'yes'){
                  var url1 = 'http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19';
                  const news_get =await axios.get(url1)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_get.data.articles[i])
                    } 
              }   
              if(user.business === 'yes'){
                  var url2 = 'http://newsapi.org/v2/top-headlines?category=business&apiKey=f75068836d0a45159177374141456b19';
                  const news_bus =await axios.get(url2)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_bus.data.articles[i])
                    }  
              }   
              if(user.entertainment === 'yes'){
                  var url3 = 'http://newsapi.org/v2/top-headlines?category=entertainment&apiKey=f75068836d0a45159177374141456b19';
                  const news_ent =await axios.get(url3)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_ent.data.articles[i])
                    } 
              }   
              if(user.health === 'yes'){
                console.log("User health");
                  var url4 = 'http://newsapi.org/v2/top-headlines?category=health&apiKey=f75068836d0a45159177374141456b19';
                  const news_hlt =await axios.get(url4)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_hlt.data.articles[i])
                  }
              }   
              if(user.science === 'yes'){
                  var url5 = 'http://newsapi.org/v2/top-headlines?category=science&apiKey=f75068836d0a45159177374141456b19';
                  const news_sci =await axios.get(url5)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_sci.data.articles[i])
                  } 
              }   
              if(user.sport === 'yes'){
                  
                  var url6 = 'http://newsapi.org/v2/top-headlines?category=sports&apiKey=f75068836d0a45159177374141456b19';
                  const news_sport =await axios.get(url6)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_sport.data.articles[i])
                  }   
              }  
              if(user.technology === 'yes'){
                  var url7 = 'http://newsapi.org/v2/top-headlines?category=technology&apiKey=f75068836d0a45159177374141456b19';
                  const news_tech =await axios.get(url7)
                  for (let i = 0; i < 20; i++) {
                      art.push(news_tech.data.articles[i])
                  }   
              }  
              
      res.status(200).json(art)
        }
    }
    catch (err){
        res.status(500).json({ message: "Error retrieving user with id " });
    }
  });



  // INDIVIDUAL CATEGORY API

  // REST API WORKING GOOD!!!
router.get("/news/general", async (req, res) => {
	try {
		const response = await axios({
			url: "http://newsapi.org/v2/top-headlines?category=general&apiKey=f75068836d0a45159177374141456b19",
			method: "get",
		});
		//res.status(200).send(response.data);
        res.status(200).render('dashboard',{articles:response.data.articles})
    } catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router; 