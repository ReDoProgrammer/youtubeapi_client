const router = require('express').Router();
const passport = require('passport'),
{google} = require('googleapis');

router.get('/google', passport.authenticate('google', {
  scope: [
    'profile',
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.force-ssl'
  ],
  accessType: 'offline'
}));

router.get('/google/redirect',
passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));
router.get('/google/logout',async function(req,res){
  req.session = null;
  req.logout();
  return res.redirect('/');
});
module.exports = router;
