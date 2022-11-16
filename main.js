const express = require("express")
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const port = 7000
const ip = '127.0.0.1'






app.get('/', function(req,res){
    res.render('index.ejs')
})

app.get('/contactme', function(req,res){
    res.render('contact.ejs')
})


app.post('/contactme', function(req,res){
    let userInfo = {
        name: req.body.name,
        email: req.body.email,
        phoneNum: req.body.phoneNumber,
        eventType: req.body.event,
        extrInfo: req.body.extrMssge
    }
    console.log(userInfo)
    res.render('contact.ejs')
})



app.get('/aboutme', function(req,res){
    res.render('about.ejs')
})




app.get('/mywork', function(req,res){
    res.render('mywork.ejs')
})




app.listen(port, ip, function(){
    console.log(`Server Running At ${ip}:${port}`)
})