//setting up a basic nodejs server 
//http module can help you to create http server

const http = require("http");
const PORT = 3000;

const server = http.createServer(async (req,res)=>{
    console.log("req  received ");
    if(req.method =="GET"){
        res.end("GET  request received");
    }
    else if(req.method =="POST"){
        res.writeHead(201);
        res.end("POST request received");
    }
    else {
        res.end("Hello world ");
    }
});

server.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});