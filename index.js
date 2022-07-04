const http=require("http")
const server= http.createServer(function(req,res){
    res.write("<h1>this is our first server</h1>")
    res.write("<h2> my website is creating updating</h2>")
    res.write(JSON.stringify({Name :"Sajal", age:"24",course:"EA10"}))
    res.end();
})
server.listen(4000)


