const http = require('http')

const hostname = '127.0.0.1' //localhost
const port = 3000

const server = http.createServer((req,res)=>{
    //create our server
    //logic here such as calculate response,
    //go to db, go to some external server

    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 200
    res.end('Hello from Node.js HTTP server!')
})

server.listen(port, hostname, ()=> {
    console.log(`Started HTTP server on ${hostname}:${port}`)
})

//curl localhost:3000, needs gitbash terminal
//expressjs.com
