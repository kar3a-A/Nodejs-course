//1 import build-in http module 
const http = require('http');
//4 import fs module from node.js
const fs = require('fs');




//2 create server & 
// accept req and response back to that request
const server = http.createServer((req,res)=>{
    let filename;
    switch (req.url) {
        case '/':
            filename = "home.html";
            break;
        case '/contact':
            filename = "contact.html";
            break;
        case '/about':
            filename = "about.html";
            break;
        default:
            filename = "404.html";
            break;
    }

    if(req){
        // which should response back to display
        // html, js, text, ... files
        // setHeader ('Content-Type', ...) 
        // ... => 'text/plain', 'text/js', ...
        res.setHeader('Content-Type', 'text/html')

        //5 read file with fs module
        fs.readFile('./views/'+filename, (err, data) => {
            if (err) {
                console.log(err)

                // response end
                res.end()
            }
            else {
                res.write(data);

                // response end
                res.end()
            }
        })

    }

})

//3 after created server => listen 
server.listen(3000, 'localhost', ()=>{
    console.log('Server Listening')
})