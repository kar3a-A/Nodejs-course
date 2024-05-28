const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((request,respond)=>{
    if(request){
        respond.setHeader('Content-Type','text/html')

        fs.readFile('./views/home.html',(err,data)=>{
            if(err){
                console.log(err);
                respond.end()
            }
            else{
                respond.write(data);
                respond.end()
            }
        })
    }
})

server.listen(3000, 'localhost',()=>{
    console.log("Server Listening!")
})