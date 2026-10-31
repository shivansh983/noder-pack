const fs = require("fs");
const path = require("path");

const DB = path.join(__dirname,"../testdata.json");


function readData() {
    const raw = fs.readFile(DATA_FILE,"utf-8")
    return JSON.parse(raw).applications;
}

function writeData(){
    fs.writeFile(DATA_FILE, JSON.stringify({TestData}, null, 2));
}

function sendSuccess(res,status,data){
    res.status(status).json({success: true ,data});   
}
function sendError(res,status,message) {
    res.status(status).json({success: false, error:message });
}


exports.getAllTest = (req,res) => {
   const {status,sort,page,limit} = req.query;
   let result = readData();

   if(status) {
    result =  result.filter((app) => app.status === status);
   }
   if (sort === "date") {
    result = result
    .slice()
    .sort((a,b) => (a.appliedDate > b.appliedDate ? 1: -1));
   }
   if (page && limit) {
    const pageNum = Number(page);
    const limitNum = Number(limit);

    const start = (pageNum - 1 ) * limitNum;
    result = result.slice(start, start+limit);
   }   
   sendSuccess(res,202,result);
};