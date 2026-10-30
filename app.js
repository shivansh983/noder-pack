const express = require('express');
const app = express();

const testRoutes = require('./routes/test.Routes')


app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});



app.get('/',(req,res)=>{
    res.send("welcome to the API");
});

app.get('/testData',testRoutes);


app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error: "Something Went Wrong"});
});

app.listen(3000, ()=>{
    console.log("API running on http://localhost:3000" );
});
