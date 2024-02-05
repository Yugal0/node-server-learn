import express from "express"
import path from "path"
const app = express()

// console.log(app)
//get post put delete (reqs) 

// app.get("/",function (req,res){
    
//     // res.end("<h1>Main</h1><h2>jakfj</h2>")
//     // res.sendFile(path.resolve("./demo.html"))
//     // res.sendFile(path.resolve("./nothing.png"))
//     res.sendFile(path.resolve("./yugal sundarnagar.mp4"))
//     console.log(req.ip)
// })

app.use(express.static(path.resolve("./public")))

app.listen(3000)