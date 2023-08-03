const fs = require('fs');
const path = require('path');


// Question one: Creating directory 'Students'
const newFolderPath = path.join(__dirname, 'Students');

fs.mkdir(newFolderPath, (err) => {
    if(err){
        console.log('folder creation failed:', err)
    } else{
        console.log('Folder successfully created');
    }
});


// Question two: Creating file user.js
const userFilePath = path.join(__dirname, 'Students', 'user.js')
const content = '';

fs.writeFile(userFilePath, content,  (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File created successfully')
});


// Question three: updating directory to 'Names'
const olderDirectoryPath = path.join(__dirname, 'Students');
const newDirectory= path.join(__dirname, 'Names');
fs.rename(olderDirectoryPath, newDirectory, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder renamed successfully')
});


// Question four: adding my name as content to user.js
const contentFilePath = path.join(__dirname, 'Names', 'user.js')
const addContent = 'Raymond';

fs.appendFile(contentFilePath, addContent, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('file updated..')
})


// Question five: updating the user.js content with my info
const updatedContentPath = path.join(__dirname, 'Names', 'user.js')
const updatedContent = ', 29, male, Nigerian, "0132544", Lagosian';

fs.appendFile(updatedContentPath, updatedContent, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('content updated..')
})


// Question six: updating the user.js to raymond.js
const currentFileName = path.join(__dirname, 'Names', 'user.js');
const newFileName = path.join(__dirname, 'Names', 'raymond.js');

if (fs.existsSync(currentFileName)) {
  fs.rename(currentFileName, newFileName, (err) => {
    if (err) {
      console.error('There was an Error renaming file:', err);
    } else {
      console.log('File renamed successfully!');
    }
  });
} else {
  console.log('File not found.');
}


// Question seven: reading the content of raymond.js
const readFilePath = path.join(__dirname, 'Names', 'raymond.js')

fs.readFile(readFilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File content: ', data)
})


// Question eight: deleting file "raymond.js"
const filePath = path.join(__dirname, 'Names', 'raymond.js')

fs.rm(filePath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File deleted successfully')
})


// Question nine: deleting directory "Names"
const newDirectoryPath = path.join(__dirname, 'Names');

fs.rmdir(newDirectoryPath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder deleted successfully')
})