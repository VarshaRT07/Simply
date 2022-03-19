const path = require('path');
// console.log(process.env.PATH);
//Provides the platform-specific path segment separator:

console.log(path.sep);


const filePath =path.join('/content/','subfolder','test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base);