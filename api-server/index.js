var express = require('express')
var cors = require('cors')

var app = express();
var data = require('./data.json')
app.use(cors())

app.get('/items',(req,res)=>{
    //console.log('okkk')
    res.send(data)
})

app.get('/item/:id',(req,res,next)=>{
    var item = data.find(item =>item.id == req.params.id)
    res.send({...item,descroptin:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."})
})

app.get('/search/:keyword?', function (req, res, next) {
  if(req.params.keyword){
    var results = data.filter(item => item.title.toLowerCase().indexOf(req.params.keyword.toLowerCase()) !== -1 )
    res.send(results)
  }
  res.send(data)
})
app.listen(4000,()=>{
    console.log('port 4000');
})