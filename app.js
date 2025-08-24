const express = require('express');
const app = express();
const morgan = require('morgan');
app.listen(3000);
//listening on port 3000
//sending a response

//register view engine
app.set('view engine', 'ejs');
//using 3rdparty middleware to log data
app.use(morgan('dev'));
//creating middleware to make our static files public and available
app.use(express.static('public'));
//creating middleware for logging request data
app.use((req,res,next) =>{

    console.log('new request made:');
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();
});
//rendering a view
app.get('/', (req, res) => {
    const blog = [
        { title: 'Blog 1', snippet: 'Content of Blog 1' },
        { title: 'Blog 2', snippet: 'Content of Blog 2' },
        { title: 'Blog 3', snippet: 'Content of Blog 3' }
    ];


    res.render('index', { title: 'Home Page',blog: blog }); });

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
}
);
app.get('/about-us', (req, res) => {
    res.redirect('/about', 301); // Redirecting to /about with a 301 status code
}
);
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
}
);
//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page Not Found' });
}
);

// This code sets up a basic Express server that listens on port 3000 and handles requests to the root and about pages, as well as redirects and 404 errors.


//method to show html page without using ejs
// app.get('/about', (req, res) => {    
//     res.sendFile('./views/about.html', { root: __dirname });    

// }
// );
// //redirecting
// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// }
// );
// //404 page
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// }
// );
//console.log(__dirname); // This will log the current directory path
console.log('listening for requests on port 3000');
// This code sets up a basic Express server that listens on port 3000 and handles requests to the root and about pages, as well as redirects and 404 errors.
