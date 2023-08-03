const path = require('path');
const os = require('os');
const process = require('process');


// Getting the current working directly;
const currentWorkingDir = path.dirname(__dirname);
console.log(currentWorkingDir);

// Getting file separator
const fileSeparator = path.sep;
console.log(fileSeparator);

// Getting extension name
const extensionName = path.extname('C:\Users\Desktop\AltSchool_NodeJS_Assignment_One\path_os_process\app.js');
console.log(extensionName);


// Current running process id
const processId = process.pid;
console.log(processId);


// Getting user information
const userInfo = os.userInfo();
console.log(userInfo);

// Getting OS platform
const platform = os.platform();
console.log(platform);