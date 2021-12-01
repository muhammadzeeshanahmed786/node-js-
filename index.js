


import express from 'express';
import bodyParser from 'body-parser';
let app=express();

// app.use(bodyParser.json({limit:'2mb'}));
app.use(bodyParser.urlencoded({extended:false}))

app.use((req,res)=>{
    console.log(req.body,'....')
    res.end();
})
app.listen('5000',()=>{
    console.log("server ready")
})




