const express=require('express');
const path=require('path');
const app=express();
app.use(express.static('./dist/angular1'));
app.get('/*',function(req,res){
  res.sendFile(path.join('./dist/angular1/index.html'));});
    app.listen(process.env.PORT || 8081);

