import http from 'node:http'

const port = process.env.PORT ||  3000;
const server = http.createServer((req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>This is a text</h1> <p>This is another text</p>')
})

server.listen(port, ()=> {
        console.log(`Port: ${port}`)
})
