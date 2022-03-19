const http= require('http')

const server= http.createServer((req,res)=>{
    // res.write('Welcome')
    // res.end()

    //for '/' and /about we check req.url
    if(req.url ==='/'){
        res.end('welcome varsha')
    }
    if(req.url ==='/about'){
        res.end('This is the about page of varsha')
    }
    res.end(
        `this page is not exist
        <h1>Back to home</h1>`
    )
}).listen(8000)