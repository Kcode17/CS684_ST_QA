
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/landing");
  }
  next();
}


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
  //res.send("Not valid")
}

module.exports = {
  
checkNotAuthenticated,
  checkAuthenticated
};
