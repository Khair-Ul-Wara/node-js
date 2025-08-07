const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

res.setHeader('content-type', 'text/html');
console.log(req.url, req.method);


let path = './views/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200; // OK
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200; // OK
        break;
        //redirecting
    case '/about-me':
        res.statusCode = 301; // Moved Permanently
        res.setHeader('Location', '/about');
        res.end();
        return; // Exit the function to prevent further processing
  
    default:
        path += '404.html';
        res.statusCode = 404; // Not Found
}

fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    } else {
        res.end(data);
    }
});


});



server.listen(3000, 'localhost',() => {
    console.log('listening for requests on port 3000');
});
