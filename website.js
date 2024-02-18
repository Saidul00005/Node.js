const http = require ('node:http')
const fs = require('node:fs')

const port = process.env.PORT ||  3000;
const server = http.createServer((req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        if(req.url == '/'){
                res.end('<h1>This is a text</h1> <p>This is another text</p>')
        }
        else if(req.url == '/about'){
                res.statusCode = 200;
                res.end('<h1>This is about text</h1> <p>This is another about text</p>')
        }  
        else if(req.url == '/index'){
                res.statusCode = 200;
                const data = fs.readFileSync('index.html')
                res.end(data.toString())
        }  
        else{
                res.statusCode = 404;
                res.end('<h1>Page not found</h1>')
        } 

})

server.listen(port, ()=> {
        console.log(`Port: ${port}`)
})
