//import {checkPassword} from './server'
const request = require('supertest');
const { exists } = require('./models/User');
const app = require('./server');

//describe('NewsAPI on landing page', () =>{
    //return request(server)
    //.get('/landing')
    //.expect('Content-Type', /json/)
    //.expect(200)
    //.then((response)=>{
        //expect(response.body).toEqual(
            //expect.arrayContaining([
                //expect.objectContaining({
                    
                //})
            //])
        //)
    //})
//})


//describe('Test on PW', () =>{
    //expect(checkPassword("Abcd@1234")).toBeTruthy();

//})