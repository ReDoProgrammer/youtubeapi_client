const router = require('express').Router(),
{google} = require('googleapis'),
OAuth2 = google.auth.OAuth2;

function authCheck(req, res, next) {
  if (req.isAuthenticated())
  return next();
  else{
    res.redirect('/');
  }
}

router.get('/',authCheck,async (req,res)=>{
  let header = new Headers();
  res.json(req.user);
  // res.render('profile/index');
});


module.exports = router;
