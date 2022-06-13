const express = require('express')
const mongoose = require('mongoose')

let monngodb_url
if(false){
    monngodb_url="mongodb+srv://admin:admin@cluster0.1hicf1e.mongodb.net/test";

}else{
    monngodb_url = "mongodb://localhost:27017"
}

mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
    app.listen(8080,()=>{
        console.log("app is listen on port number 8080")
    })
}).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
});

const app = express()
const {createUser} = require('./controllers/leetcode/create')
const {getInfo} = require('./controllers/leetcode/get')
app.get('/create',createUser)
app.get('/get/:token',getInfo)



app.get('/',(req,res)=>{
    res.send('Hello you are in homepage')
})

