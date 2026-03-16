const express = require("express");
const app = express();

function getPeriod(){

let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth()+1).padStart(2,'0');
let day = String(now.getDate()).padStart(2,'0');

let hour = String(now.getHours()).padStart(2,'0');
let minute = String(now.getMinutes()).padStart(2,'0');

let seconds = now.getSeconds();
let counter = Math.floor(seconds/30)+1;

let period = year+month+day+hour+minute+"0"+counter;

return period;

}

app.get("/api/period",(req,res)=>{

let sec = new Date().getSeconds();
let remain = 30-(sec%30);

res.json({
period:getPeriod(),
timer:remain
})

})

app.listen(3000,()=>console.log("API RUNNING"));
