const express = require("express");

const app = express();

const PORT = 3000;
const HOST = '127.0.0.1'

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get("/",(req,res)=>{
    res.send("welcome")
});

app.get("/joblist",(req,res)=>{
    res.send(`fetch list status ${req.params.id}`);
});

app.listen(PORT,HOST,()=> console.log(`server is running on host: ${HOST} and PORT: ${PORT}`))