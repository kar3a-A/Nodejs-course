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
            console.log("Home page is requesting!")
            filename = "home.html";
            res.statusCode = 200;
            break;
        case '/contact':
            filename = "contact.html";
            res.statusCode = 200;
            break;
        case '/contact-us':
            // redirect status code
            res.statusCode = 301;
            // redirect with setHeader('Location',...)
            res.setHeader('Location','/contact')
            break;
        case '/about':
            filename = "about.html";
            res.statusCode = 200;
            break;
        default:
            filename = "404.html";
            res.statusCode = 404;
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