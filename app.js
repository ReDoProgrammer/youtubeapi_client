const express = require('express'),
app = express(),
passport = require('passport'),
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
{google} = require('googleapis'),
OAuth2 = google.auth.OAuth2;
expressLayout = require('express-ejs-layouts');
config = require('./configs/config');
passportSetup = require('./configs/passport-setup');
authRoute = require('./routes/auth-route');
cookieSession = require('cookie-session');
bodyParser = require('body-parser');


app.set('view engine','ejs');
app.set('views',"./views");
app.use(expressLayout);
app.use(express.static("./public"));

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:['aaaaaaaaaaaaaaaaaaaa']
}));
app.use(passport.initialize());
app.use(passport.session());
expressLayout = require('express-ejs-layouts');

app.set('layout', 'layouts/layout');


app.use('/auth',authRoute);

app.listen(5000,()=>{
  console.log('server is running on port: 5000');
});

app.get('/',function(req,res){
  return res.render('home/index',{ layout: 'home/index' });
});
