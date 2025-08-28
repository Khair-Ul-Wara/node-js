const fs = require('fs');

// Read the contents of a file
fs.readFile('./DOCS/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);

    }
    console.log(data.toString());
});
//write to the file
fs.writeFile('./DOCS/blog1.txt','This is a new file created by Node.js',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('File written successfully');
}
);
// Append to the file
fs.appendFile('./DOCS/blog1.txt','\nThis is appended text.',(err
)=>{
    if(err){
        console.log(err);
    }
    console.log('File appended successfully');
}
);
// Delete the file
fs.unlink('./DOCS/blog1.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('File deleted successfully');
}
);
// Create a directory
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Directory created successfully');
}
);
// Delete a directory

fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Directory deleted successfully');
}
);
// List files in a directory
fs.readdir('./assets',(err,files)=>{
    if(err){
        console.log(err);
    }
    console.log('Files in directory:', files);
}
);
// Check if a file exists
fs.access('./DOCS/blog1.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist');
    } else {
        console.log('File exists');
    }
});
// Get file stats
fs.stat('./DOCS/blog1.txt', (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File stats:', stats);
    }
});
// Watch a file for changes
fs.watchFile('./DOCS/blog1.txt', (curr, prev) => {
    console.log('File changed');
    console.log('Current stats:', curr);
    console.log('Previous stats:', prev);
});

// Rename a file
fs.rename('./DOCS/blog1.txt', './DOCS/blog2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File renamed successfully');
    }
});
// Copy a file
const { copyFile } = require('fs');

copyFile('./DOCS/blog2.txt', './DOCS/blog3.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File copied successfully');
    }
}
);
