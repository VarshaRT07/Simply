const http= require('http');

const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello Varsha Nandhini")
    res.end();
})

server.listen(8080);