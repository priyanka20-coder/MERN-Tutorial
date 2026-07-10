// const fs = require("fs");
// fs.readFile("demo.txt","UTF-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// const fs = require("fs");
// fs.writeFile("demo.txt","\n This is new line Added",(err,data)=>{
//     if(err) throw err;
//     else console.log("Data has been written");
// })

// const fs = require("fs");
// fs.appendFile("demo.txt","\n This is My Append",(err,data)=>{
//     if(err) throw err;
//     else console.log("Done");
// })

// const fs = require("fs");
// fs.unlink("demo.txt",(err,data)=>{
//     if(err) throw err;
//     else console.log("Remove");
// })

const fsP = require("fs").promises;
fsP.readFile("data1.txt","UTF-8")
.then((data1)=>fsP.readFile("data2.txt","UTF-8")
.then((data2)=>fsP.writeFile("CT2.txt",data1+data2)))
.catch((err)=>console.log(err))