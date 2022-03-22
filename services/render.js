const axios = require('axios');



exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/users/api/Users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("dashboard", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}