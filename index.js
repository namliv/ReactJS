var express = require('express');
var app = express();
var Parser = require('parser')

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(3000);

//khai báo route
app.get('/',function(req,res){
   res.render('trangchu');
});

app.get('/homepage',function(req,res){
   res.render('homepage');
});

app.get('/img',function(req,res){
    res.render('img');
});

app.get('/interval',function(req,res){
    res.render('interval');
});

app.get('/html',function(req,res){
    res.render('html');
});

app.get('/arr',function(req,res){
    res.render('arr');
});

var mang = ['Androi','IOS','PHP'];

app.get('/app',function(req,res){
    res.render('app');
});

app.post('/getNotes',function(req,res){
    res.send(mang);
});

app.post('/delele', parser ,function(req,res){
    var id = req.body.idXoa;
    //bỏ phân tử ra khỏi mảng
    mang.splice(id,1);
    res.send(mang);
});