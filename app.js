const http = require('http');
const port = 3000

const server = http.createServer(function(req, res){

});

server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error)
    }else{
        console.log('server is listeniing on port' + port)
    }
});

console.log('hello world')