var express =  require('express');
const path =  require("path");

var app=express();

app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.use(express.urlencoded({
//     extended:true
// }))
// app.get('/', function(req,res){
//     res.send('this is the homepage!');
// });
// app.get('/next', function(req,res){
//     res.send('this is the nextpage!');
// });
// app.get('/json', function(req,res){
//     res.json(["Tony","Lisa"]);
// })

// app.post('/form', function(req,res){
//     const u=req.body.fname;
//     res.send('received'+u);
// })
app.listen(3000);
