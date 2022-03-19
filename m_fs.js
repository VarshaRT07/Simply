const {readFileSync,writeFileSync}= require('fs')
console.log('start')

const first =readFileSync('./content/subfolder/first.txt','utf8');
const third =readFileSync('./content/subfolder/third.txt','utf8');

writeFileSync( 
    './content/subfolder/second.txt',
    `here is the result :${first},${third}`,
    {flag : 'a'}
)

console.log('done with this task')
console.log('starting the next one')
//this creates a new file and add the content if already exists it add it