const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"testdata.json");

// sync (simple , blocks the thread)

const data = fs.readFileSync(filePath,"utf-8")
console.log(JSON.parse(data));

//Async( Better Way)
fs.readFile(filePath,"utf-8",(err,data)=>{
    if (err) throw err;
    console.log(JSON.parse(data));
});
