const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

const file = path.join(__dirname,"testdata.json");

const new_data = {
  "TestData":[
    {
    "id": 1,
    "company": "new",
    "role": "IT",
    "status": "applied",
    "appliedDate": "2026-04-13"
    },
    {
    "id": 2,"company": "second","role": "IT","status": "applied","appliedDate": "2026-04-13"
    }

  ]
   
}


fs.writeFil(file,JSON.stringify(new_data,null,2),(err)=>{
    if (err) throw err;

    console.log("complete")
});