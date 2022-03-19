// modules -encapsulated code (only share minimum)
//Commonjs,every file is module (default)
// if we place initiation and function definition in another  file we can access in any file using modules

//Use the exports keyword to make properties and methods available outside the module file.

//built-in modules are os,http,path,fs



// const john ='joy';
// const mary='jayasri';

// const greet=(name)=>{
// console.log(`Hello ${name}`);

// }

const  names= require('./m1')
const greet=require('./m2')
const obj=require('./m3')
const total=require(`./m4`)
total
greet('Varsha');
greet(names.john);
greet(names.mary);

