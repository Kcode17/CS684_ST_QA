const axios = require('axios');



exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/Users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("index", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}