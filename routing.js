const http = require('http');
const fs = require('fs');
const _ = require('lodash'); // lodash is not used in this snippet, but can be useful for utility functions
const server = http.createServer((req, res) => {

res.setHeader('content-type', 'text/html');
// console.log(req.url, req.method);
const num = _.random(0, 100);
console.log(num);// This will log a random number between 0 and 100
const greet = _.once(() => {
    console.log('hello');   
});
greet(); // This will log 'hello' only once, no matter how many times greet


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
