const express = require('express');
app = express();
app.set('view engine','ejs');
app.set('views',"./views");
app.use(express.static("./public"));
app.listen(5000,()=>{
  console.log('server is running on port: 5000');
});

app.get('/',function(req,res){
  return res.render('home/index');  
});
