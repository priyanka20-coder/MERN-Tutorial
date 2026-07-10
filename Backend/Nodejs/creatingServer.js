const http = require ("http");
server = http.createServer((req,res)=>{
    res.end("This is My first module")
})
server.listen(3000,()=>{
    console.log("Listening to prot 3000")
})