const http = require("http");

const HOST = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req,res)=>{
    if (req.url==='/' && req.method==="GET"){
        res.writeHead(200,{"content-Type": "text/plain"});        
        res.end("running")
    }
    else if (req.url==='/joblist' && req.method==="GET"){
        res.writeHead(200,{"content-Type" : "TestData/json"});
        res.end(JSON.stringify({status:"OK"}))
    }
    else {
    res.writeHead(404, { "Content-Type": "TestData/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
}

});

server.listen(PORT,HOST,()=>{
console.log(`server is running at http://${HOST}:${PORT}/`);
})