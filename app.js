const express = require('express'),
app = express(),
passport = require('passport'),
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
{google} = require('googleapis'),
OAuth2 = google.auth.OAuth2;
expressLayout = require('express-ejs-layouts');
config = require('./configs/config');
passportSetup = require('./configs/passport-setup');

//-------------define routes ------------------
authRoute = require('./routes/auth-route');
profileRoute = require('./routes/profile-route');
//------------end define routes


cookieSession = require('cookie-session');
bodyParser = require('body-parser');


app.set('view engine','ejs');
app.set('views',"./views");
app.use(expressLayout);
app.use(express.static("./public"));

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[config.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
expressLayout = require('express-ejs-layouts');

app.set('layout', 'layouts/layout');


app.use('/auth',authRoute);
app.use('/profile',profileRoute);

app.listen(config.port,()=>{
  console.log(`server is running on port: ${config.port}`);
});

app.get('/',function(req,res){
  return res.render('home/index',{ layout: 'home/index' });
});

app.get('/kham-suc-khoe',function(req,res){
    return res.render('ksk/index',{ layout: 'ksk/index' });
});
