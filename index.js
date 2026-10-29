const fs = require('fs');
const path = require('path');

const file  = path(__dirname,'package.json');

const data = fs.readFileSync(file,"utf-8")

console.log(JSON.parse(data));

fs.readFile(file,"utf-8"),(err,data)=>{
    if (err) throw err;
    console.log(JSON.parse(data));
}