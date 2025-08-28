const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    //different ways to set headers
    //res.setHeader('content-type','text/plain');
   res.setHeader('content-type','text/html');
   fs.readFile('./views/index.html',(err,data)=>{

    if(err){
        console.log(err);
        res.end();
    }
    else{
        // res,write(data);
        res.end(data);
        //we can also use res.write(data) to send the response
    }
   })

   // res.write('<h1>hello</h1>');
    
});

server.listen(3000, 'localhost',() => {
    console.log('listening for requests on port 3000');
});
