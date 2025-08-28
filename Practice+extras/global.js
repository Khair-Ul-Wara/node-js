//console.log(global);
//global is an object that contains all global variables and functions
//setTimeout and setInterval are global functions
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);
// setTimeout is a global function that executes after a specified time
const int =setInterval(() =>{
    console.log('in the interval');
},1000);
//print directory and file name
console.log(__dirname);
console.log(__filename);

