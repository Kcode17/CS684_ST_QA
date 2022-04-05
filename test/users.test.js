const User = require('../models/user');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp); 

 describe('/First Test Collection', () =>{
    it('test default API welcome route...', (done) =>{
        chai.request(app)
        .get('/')
        .end((err,res) => {
            res.should.have.status(200);
            done();
        });
    });


    it('GET Landing page of application', (done) => {
        
        chai.request(app)
        .get('/') 
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('GET all users from the DB', (done) => {
        chai.request(app)
        .get('/api/Users')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.length.should.not.be.eql(0);
            done();
        });
    });

    it('GET Register ', (done) => {
        chai.request(app)
        .get('/users/register')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('POST a valid user details to DB - REGISTER', (done) => {
        let User = {
            name: "zahahuss",
            email: "zahahuss@test.com",
            password: "Qwerty@123",
            password2: "Qwerty@123"
        }
        
        chai.request(app)
        .post('/users/register')
        .send(User)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('GET Login ', (done) => {
        chai.request(app)
        .get('/users/login')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    
    it('POST user details for Login to Application', (done) => {
        let User = {
            email: "zahahuss@test.com",
            password: "Qwerty@123"
        }
       
       chai.request(app)
       .post('/users/login') //add valid ID here
       .send(User)
       .end((err, res) => {
           res.should.have.status(200);
           done();
       });
   });

   it('GET user landing - Dashboard', (done) => {
    let User = {
        _id: "623891984e1c9df50b7d34ad", //add valid ID here
    }    
    chai.request(app)
    .get('/dashboard') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
  });
});

   it('GET Specific user details', (done) => {
    let User = {
        _id: "623891984e1c9df50b7d34ad", //add valid ID here
    }    
    chai.request(app)
    .get('/api/Users') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
    });
});

   it('UPDATE user details in DB', (done) => {
    let User = {
        _id: "623891984e1c9df50b7d34ad", //add valid ID here
        general: "no"
    }
   
   chai.request(app)
   .put('/api/users/623891984e1c9df50b7d34ad') //add valid ID here
   .send(User)
   .end((err, res) => {
       res.should.have.status(200);
       done();
   });
}); 

    it('Logout from the Application', (done) => {
         let User = {
             _id: "623891984e1c9df50b7d34ad", //add valid ID here
         }    
    chai.request(app)
    .get('/users/logout') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
    });
    });

})


describe('/Second Test Collection', () =>{
    it('GET News as per preference for valid user /news/users/:id', (done) => {  
        chai.request(app)
        .get('/news/users/623891984e1c9df50b7d34ad') 
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.articles.should.have.lengthOf.below(251);
        res.body.articles.should.be.not.empty;
        done();
        }).timeout(10000);
   })


   it('GET News not fetched for invalid user /news/users/:id', (done) => {  
    chai.request(app)
    .get('/news/users/623891984e1c9df50b6d34ad') 
    .end((err, res) => {
    res.should.have.status(401);
    //res.should.be.a('"message": "User is not recognized (unauthorized)"');
    res.body.should.have.property('message').eql('User is not recognized (unauthorized)');
    done();
    }).timeout(10000);
})


   it('GET News for general', (done) => {   
        chai.request(app)
        .get('/news/category/general')  
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.articles.should.have.length(100);
        res.body.articles.should.be.not.empty;
        done();
        }).timeout(10000);
    })
    it('GET News for health', (done) => {
        chai.request(app)
        .get('/news/category/health')  
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.articles.should.have.length(100);
        res.body.articles.should.be.not.empty;
        done();
        }).timeout(10000);
    })

    it('GET News for entertainment', (done) => {  
            chai.request(app)
            .get('/news/category/entertainment')  
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.articles.should.have.length(100);
            res.body.articles.should.be.not.empty;
            done();
        }).timeout(10000);
    })

    it('GET News for science', (done) => {   
            chai.request(app)
            .get('/news/category/science') 
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.articles.should.have.length(100);
            res.body.articles.should.be.not.empty;
            done();
        }).timeout(10000);
    })
    it('GET News for technology', (done) => { 
            chai.request(app)
            .get('/news/category/technology')  
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.articles.should.have.length(100);
            res.body.articles.should.be.not.empty;
            done();
        }).timeout(10000);
    })
    it('GET News for sports', (done) => { 
            chai.request(app)
            .get('/news/category/sports')  
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.articles.should.have.length(100);
            res.body.articles.should.be.not.empty;
            done();
        }).timeout(10000);
    })

    it('GET News for science', (done) => { 
            chai.request(app)
            .get('/news/category/science')  
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.articles.should.have.length(100);
            res.body.articles.should.be.not.empty;
            done();
        }).timeout(10000);
    }) 

    it('GET News for dashboard - home', (done) => { 
            chai.request(app)
            .get('/dashboard/home/1')  
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        }).timeout(10000);
    })

//     it('GET News for dashboard - health', (done) => { 
//         chai.request(app)
//         .get('/dashboard/health/1')  
//         .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//     }).timeout(10000);
// })

//     it('GET News for dashboard - health', (done) => { 
//         chai.request(app)
//         .get('/dashboard/health/1')  
//         .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//     }).timeout(10000);
// })

//     it('GET News for dashboard - science', (done) => { 
//             chai.request(app)
//             .get('/dashboard/science/1')  
//             .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             done();
//         }).timeout(10000);
//     })

})
