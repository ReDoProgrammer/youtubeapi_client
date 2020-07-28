const express = require('express');
expressLayout = require('express-ejs-layouts');
app = express();

app.set('view engine','ejs');
app.set('views',"./views");
app.use(expressLayout);
app.use(express.static("./public"));
expressLayout = require('express-ejs-layouts');

app.set('layout', 'layouts/layout');
app.listen(5000,()=>{
  console.log('server is running on port: 5000');
});

app.get('/',function(req,res){
  return res.render('home/index',{ layout: 'home/index' });
});
