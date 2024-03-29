const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('index.html','utf-8');
const datajson = fs.readFileSync('data.json','utf-8');

const server = http.createServer((req,res)=>{
    console.log(req.url)
    console.log('server started')
    res.setHeader('Dummy','DummyValue')
    res.setHeader('Content-Type','application/json')
    res.end('<h1>helloo</h1>')
})

server.listen(8080)