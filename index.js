const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

const file = path.join(__dirname,"testdata.json");

const new_data = {
    
    "id": 1,
    "company": "new",
    "role": "IT",
    "status": "applied",
    "appliedDate": "2026-04-13"

}

fs.writeFile(file,JSON.stringify(new_data,null,2),(err)=>{
    if (err) throw err;

    console.log("complete")
});