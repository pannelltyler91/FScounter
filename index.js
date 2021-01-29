var express = require('express');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname +'/public'));

let counter = 0;

app.get('/increment', function(req,resp,next){
 counter ++;
 resp.json(counter);

})
app.get('/decrement', function(req,resp, next){
counter --;
resp.json(counter);

})
app.get('/value', function(req,resp,next){
resp.json(counter);
})

app.get('/DELETE', function(req,resp,next){
    counter = 0;
resp.json(counter);
})


app.listen(3000, function(){
    console.log('listening in port 3000');
})