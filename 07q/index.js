const http = require("http")
const { type } = require("os")

const PORT = 3001
const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>')        
        
    }else{
        res.end()
        
    }
})

server.listen(PORT)