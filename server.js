// import build-in http module 
const http = require('http');

// create server & 
// accept req and response back to that request
const server = http.createServer((req,res)=>{
    if(req){
        // which should response back to display
        // html, js, text, ... files
        // setHeader ('Content-Type', ...) 
        // ... => 'text/plain', 'text/js', ...
        res.setHeader('Content-Type', 'text/html')

        res.write('<h1>Hello</h1>')
        // response end
        res.end()
    }

})

// after created server => listen 
server.listen(3000, 'localhost', ()=>{
    console.log('Server Listening')
})